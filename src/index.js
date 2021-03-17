import { dingSdk, Markdown, At } from './dingSdk/index'

let initialized = false

export const init = (webhook, secret) => {
  dingSdk.initDing(webhook, secret)
  initialized = true
}

export const sendMessage = (title, content, atObjects = []) => {
  if (!initialized) return
  const atObjectDefined = atObjects.length === 0 ? new At(true) : new At(false, atObjects)
  dingSdk.dingMarkdown(new Markdown(title, content), atObjectDefined)
}
