# ding-talk
钉钉机器人自定义发送消息

```javascript
const { init, sendMessage } = require('ding-talk')

// 配置信息
const dingOptions = {
    webhook: '测试机器人webhook',
    secret: '测试机器人secret'
  }
// 初始化sdk
initDing(Config[env].webhook, Config[env].secret)
// 发送消息，发送消息支持格式化文档
sendChangeLog('发送消息', '发送消息内容')
```
