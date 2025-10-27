import {
    CallToolRequestSchema,
    CallToolResult,
    ListToolsRequestSchema,
    SetLevelRequestSchema,
    Tool,
} from "@modelcontextprotocol/sdk/types.js";
import express from "express";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { AuthInfo } from "@modelcontextprotocol/sdk/server/auth/types.js";
import { McpToolDefinition, toolDefinitionMap } from "./toolDefinition.js";
import { jsonSchemaToZod } from 'json-schema-to-zod';
import axios, { type AxiosRequestConfig, type AxiosError } from 'axios';

import { z, ZodError } from 'zod';
type JsonObject = Record<string, any>;

const MINDSHOW_API_ROOT = process.env.MINDSHOW_API_ROOT || "https://api.mindshow.vip";
// const REQUEST_TIMEOUT = 300000; // 5分钟超时
const MAX_CONCURRENT_REQUESTS = 100; // 最大并发请求数

// 请求计数器
let activeRequests = 0;



// 带超时的 Promise
// function withTimeout<T>(
//   promise: Promise<T>,
//   timeoutMs: number,
//   errorMessage: string
// ): Promise<T> {
//   return Promise.race([
//     promise,
//     new Promise<T>((_, reject) =>
//       setTimeout(() => reject(new Error(errorMessage)), timeoutMs)
//     ),
//   ]);
// }
//
export const createServer = () => {
    const server = new Server(
        {
            name: "mindshow-mcp-server",
            version: "1.0.0",
        },
        {
            capabilities: {
                logging: {},
                tools: {
                    listChanged: false,
                },
            },
        }
    );

    const toolsForClient: Tool[] = Array.from(toolDefinitionMap.values()).filter( (def)=>{
        return def.name != "resource_upload";
    } ) .map(def => {
        //添加对话类 应用要的结构
        def.outputSchema["properties"] = {
            "isError": {
                "type": "boolean", "description": "是否成功, 对话类应用使用",
            },
            "content": {
                "type": "array", "description": "内容列表",
                "items":  {
                    "type": {
                        "type": "string", "description": "类型 :text ",
                    },
                    "text": {
                        "type": "string", "description": "内容",
                    },
                }
            },

            ...def.outputSchema["properties"],
        };
        return {
            name: def.name,
            description: def.description,
            inputSchema: def.inputSchema,
            outputSchema: def.outputSchema,
        };
    }
    );

    server.setRequestHandler(ListToolsRequestSchema, async () => {
        return { tools: toolsForClient.splice(0, 100) };

    });

    let currentLogLevel = "info";

    // 添加 logging/setLevel 处理器
    server.setRequestHandler(SetLevelRequestSchema, async (request) => {
        const { level } = request.params || {};
        const validLevels = ["error", "warn", "info", "debug"];
        if (level && validLevels.includes(level)) {
            currentLogLevel = level;
            console.error(`[MCP Server] Log level set to: ${level}`);
        } else {
            console.error(
                `[MCP Server] Invalid log level: ${level}, keeping current: ${currentLogLevel}`
            );
        }
        return {};
    });

    server.setRequestHandler(
        CallToolRequestSchema,
        async (request, extra): Promise<CallToolResult> => {
            // 检查并发限制
            if (activeRequests >= MAX_CONCURRENT_REQUESTS) {
                return {
                    isError: true,
                    content: [
                        {
                            type: "text",
                            text: "服务器繁忙，请稍后重试",
                        },
                    ],
                };
            }

            activeRequests++;
            const { authInfo } = extra;
            const { name, arguments: _args } = request.params;
            const apiKey = authInfo?.token || process.env.API_KEY;

            if (!apiKey) {
                console.error("No valid api key provided");
                return {
                    isError: true,
                    content: [
                        {
                            type: "text",
                            text: `您的 API Key 未设置，请登录 www.mindshow.vip 获得有效 的 api_key  `,
                        },
                    ],
                };
            }


            try {
                const { name: toolName, arguments: toolArgs } = request.params;
                const toolDefinition = toolDefinitionMap.get(toolName);
                if (toolDefinition) {
                    return await executeApiTool(toolName, toolDefinition, toolArgs ?? {} , apiKey);
                }


                //处理 API 请求


                return {
                    isError: true,
                    content: [
                        {
                            type: "text",
                            text: `Tool "${name}" not found.`,
                        },
                    ],
                };
            } finally {
                activeRequests--;
            }
        }
    );

    return {
        server,
    };
};

export async function executeApiTool(
    toolName: string,
    definition: McpToolDefinition,
    toolArgs: JsonObject,
    apiKey:string,
): Promise<CallToolResult> {
  try {
    // Validate arguments against the input schema
    let validatedArgs: JsonObject;
    try {
        const zodSchema = getZodSchemaFromJsonSchema(definition.inputSchema, toolName);
        const argsToParse = (typeof toolArgs === 'object' && toolArgs !== null) ? toolArgs : {};
        validatedArgs = zodSchema.parse(argsToParse);
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            const validationErrorMessage = `Invalid arguments for tool '${toolName}': ${error.errors.map(e => `${e.path.join('.')} (${e.code}): ${e.message}`).join(', ')}`;
            return { content: [{ type: 'text', text: validationErrorMessage }] };
        } else {
             const errorMessage = error instanceof Error ? error.message : String(error);
             return { content: [{ type: 'text', text: `Internal error during validation setup: ${errorMessage}` }] };
        }
    }

    // Prepare URL, query parameters, headers, and request body
    let urlPath = definition.pathTemplate;
    const queryParams: Record<string, any> = {};
    const headers: Record<string, string> = { 'Accept': 'application/json' };
    let requestBodyData: any = "{}";

      const requestUrl = MINDSHOW_API_ROOT ? `${MINDSHOW_API_ROOT}${urlPath}` : urlPath;

    // Handle request body if needed
    if ( typeof validatedArgs !== 'undefined') {
        requestBodyData = validatedArgs;
    }



      //let token = "sk-U0ij7MlaF3n3eKI0C8Jty_gudsLCukbcCqxMBwKbQzm4";
      //token=queryParams.token;
      headers['Authorization'] = `Bearer ${apiKey}`;
      headers['Content-Type'] = `application/json`;




      // Prepare the axios request configuration
      const config: AxiosRequestConfig = {
          method: definition.method.toUpperCase(),
          url: requestUrl,
          params: queryParams,
          headers: headers,
          ...(requestBodyData !== undefined && { data: requestBodyData }),
      };

      // Log request info to stderr (doesn't affect MCP output)
      console.error(`Executing tool "${toolName}": ${config.method} ${config.url}`);

    // Execute the request
    const response = await axios(config);

    // Process and format the response
    let responseText = '';
    const contentType = response.headers['content-type']?.toLowerCase() || '';


    // Handle JSON responses
    if (contentType.includes('application/json') && typeof response.data === 'object' && response.data !== null) {
         try {
             responseText = JSON.stringify(response.data, null, 2);
         } catch (e) {
             responseText = "[Stringify Error]";
         }
    }
    // Handle string responses
    else if (typeof response.data === 'string') {
         responseText = response.data;
    }
    // Handle other response types
    else if (response.data !== undefined && response.data !== null) {
         responseText = String(response.data);
    }
    // Handle empty responses
    else {
         responseText = `(Status: ${response.status} - No body content)`;
    }


    // Return formatted response
    return {
        isError:false,
        content: [
            {
                type: "text",
                text: `API Response (Status: ${response.status}):\n${responseText}`
            }
        ],
        ... response.data
    };

  } catch (error: unknown) {
    // Handle errors during execution
    let errorMessage: string;

    // Format Axios errors specially
    if (axios.isAxiosError(error)) {
        errorMessage = formatApiError(error);
    }
    // Handle standard errors
    else if (error instanceof Error) {
        errorMessage = error.message;
    }
    // Handle unexpected error types
    else {
        errorMessage = 'Unexpected error: ' + String(error);
    }

    // Log error to stderr
    console.error(`Error during execution of tool '${toolName}':`, errorMessage);

    // Return error message to client
    return { content: [{ type: "text", text: errorMessage }] };
  }
}


// get auth info
export const getAuthInfo = (req: express.Request): AuthInfo => {
    let apiKey = (req.query.API_KEY as string) || process.env.API_KEY;
    const authHeader = req.headers.authorization as string | undefined;
    if (!apiKey && authHeader) {
        const [_type, token] = authHeader.split(" ");
        apiKey = token;
    }
    if (!apiKey) {
        throw new Error("No valid api key provided");
    }
    return { token: apiKey, clientId: "", scopes: ["Generation"] };
};

/**
 * Converts a JSON Schema to a Zod schema for runtime validation
 *
 * @param jsonSchema JSON Schema
 * @param toolName Tool name for error reporting
 * @returns Zod schema
 */
function getZodSchemaFromJsonSchema(jsonSchema: any, toolName: string): z.ZodTypeAny {
    if (typeof jsonSchema !== 'object' || jsonSchema === null) {
        return z.object({}).passthrough();
    }
    try {
        const zodSchemaString = jsonSchemaToZod(jsonSchema);
        const zodSchema = eval(zodSchemaString);
        if (typeof zodSchema?.parse !== 'function') {
            throw new Error('Eval did not produce a valid Zod schema.');
        }
        return zodSchema as z.ZodTypeAny;
    } catch (err: any) {
        console.error(`Failed to generate/evaluate Zod schema for '${toolName}':`, err);
        return z.object({}).passthrough();
    }
}

/**
 * Formats API errors for better readability
 *
 * @param error Axios error
 * @returns Formatted error message
 */
function formatApiError(error: AxiosError): string {
    let message = 'API request failed.';
    if (error.response) {
        message = `API Error: Status ${error.response.status} (${error.response.statusText || 'Status text not available'}). `;
        const responseData = error.response.data;
        const MAX_LEN = 200;
        if (typeof responseData === 'string') {
            message += `Response: ${responseData.substring(0, MAX_LEN)}${responseData.length > MAX_LEN ? '...' : ''}`;
        }
        else if (responseData) {
            try {
                const jsonString = JSON.stringify(responseData);
                message += `Response: ${jsonString.substring(0, MAX_LEN)}${jsonString.length > MAX_LEN ? '...' : ''}`;
            } catch {
                message += 'Response: [Could not serialize data]';
            }
        }
        else {
            message += 'No response body received.';
        }
    } else if (error.request) {
        message = 'API Network Error: No response received from server.';
        if (error.code) message += ` (Code: ${error.code})`;
    } else {
        message += `API Request Setup Error: ${error.message}`;
    }
    return message;
}
