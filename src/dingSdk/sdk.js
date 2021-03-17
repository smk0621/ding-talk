import axios from 'axios'
import crypto from 'crypto'
import Link from './class/Link'
import At from './class/At'
import ActionCard from './class/ActionCard'

const hmacBase64 = (secret, data) => {
  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(data)
  return hmac.digest('base64')
}

const getSign = secret => {
  const timestamp = Date.now()
  const stringToSign = timestamp + '\n' + secret
  const sign = encodeURIComponent(hmacBase64(secret, stringToSign))
  return { timestamp, sign }
}
const getHookUrl = (webhook, secret) => {
  const { timestamp, sign } = getSign(secret)
  return `${webhook}&timestamp=${timestamp}&sign=${sign}`
}

let hookUrl

export const initDing = (webhook, secret) => {
  hookUrl = getHookUrl(webhook, secret)
}
/**
 * dingText text类型
 * @param content
 * @param {At} at
 */
export const dingText = (content, at = new At()) => {
  if (!hookUrl) throw new Error('请先initDing！')
  axios.post(hookUrl, {
    msgtype: 'text',
    text: {
      content
    },
    at
  }).then(ret => {
    console.log(ret.data)
  })
}

/**
 * dingLink link类型
 * @param {Link} link
 */
export const dingLink = (link = new Link()) => {
  if (!hookUrl) throw new Error('请先initDing！')
  axios.post(hookUrl, {
    msgtype: 'link',
    link
  })
}
/**
 * dingMarkdown markdown类型
 * @param {Markdown} markdown
 * @param {At} at
 */
export const dingMarkdown = (markdown, at = new At()) => {
  if (!hookUrl) throw new Error('请先initDing！')
  axios.post(hookUrl, {
    msgtype: 'markdown',
    markdown,
    at
  })
}

/**
 * dingPartActionCard 独立跳转ActionCard类型
 * @param {ActionCard} actionCard
 */
export const dingPartActionCard = (actionCard = new ActionCard()) => {
  if (!hookUrl) throw new Error('请先initDing！')
  axios.post(hookUrl, {
    msgtype: 'actionCard',
    actionCard
  })
}
/**
 * dingFeedCard FeedCard类型
 * @param links
 */
export const dingFeedCard = (links = []) => {
  if (!hookUrl) throw new Error('请先initDing！')
  axios.post(hookUrl, {
    msgtype: 'feedCard',
    feedCard: {
      links
    }
  })
}

/**
 * dingWholeActionCard 整体跳转ActionCard类型，请使用 ActionCard.whole() 来构造对象
 * @param {ActionCard} actionCard
 */
export const dingWholeActionCard = (actionCard = ActionCard.whole()) => {
  if (!hookUrl) throw new Error('请先initDing！')
  axios.post(hookUrl, {
    msgtype: 'actionCard',
    actionCard
  })
}

export default {
  initDing,
  dingText,
  dingLink,
  dingMarkdown,
  dingPartActionCard,
  dingFeedCard,
  dingWholeActionCard
}
