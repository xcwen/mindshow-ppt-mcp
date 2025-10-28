# Mindshow-MCP-server

## 简介
MINSHOSW PPT MCP server， 适配 https://api-doc.mindshow.vip

### Tools

1.  https://api-doc.mindshow.vip 接口列表

2. `generate_ppt_by_topic` (直接输出ppt,用在agent)  (TODO)
   - 输入:
     - `topic` (string): 话题或相关内容
    返回: PPTX链接

## 使用指引：

### 方法 1：Streamable HTTP
1.    https://mpc.mindshow.vip?api_key=<替换为获取的 token>

### 方法 2：本地执行

3. 复制以下配置，填入到 Cloude Desktop、Cursor 等客户端中使用。
```json
{
  "mcpServers": {
    "MINDSHOW-PPT": {
      "command": "npx",
      "args": ["-y", "mindshow-mcp-server@latest"],
      "env": {
        "API_KEY": "替换为获取的 token"
      }
    }
  }
}
```
