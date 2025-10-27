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
1. 访问并登录 https://www.minshow.vip/
2. 进入「设置-MCP 服务器」页面，复制页面中提供的 URL 地址
3. 将其粘贴到 Cherry Studio、Cursor 等客户端中使用。

### 方法 2：本地执行

1. 访问并登录 https://www.minshow.vip/
2. 进入个人「设置-MCP 服务器」页面，获取页面中提供的 URL 地址，复制 URL 中末尾 API_KEY 的值。
3. 复制以下配置，填入到 Cloude Desktop、Cursor 等客户端中使用。
```json
{
  "mcpServers": {
    "MINDSHOW-PPT": {
      "command": "npx",
      "args": ["-y", "mindshow-mcp-server@latest"],
      "env": {
        "API_KEY": "替换为获取的 API_KEY"
      }
    }
  }
}
```
