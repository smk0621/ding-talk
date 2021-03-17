const { init, sendMessage } = require('../dist/index.js')

// 配置信息
const dingOptions = {
  webhook: 'https://oapi.dingtalk.com/robot/send?access_token=c2c6e52878134c39b6d5eec7abf944f8084c34c1c3dc2ef3979d7afeb8ac2ae5',
  secret: 'SEC8e1e5683836d7e8359177d95b5b2ca1f37efe20e27d817f3d5734926d30d01d7'
}

// 初始化sdk
init(dingOptions.webhook, dingOptions.secret)
// 发送消息，发送消息支持格式化文档

sendMessage('test', 'test-message')
