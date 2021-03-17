export default class At {
  /**
   * @param {boolean} isAtAll @所有人时：true，否则为：false
   * @param {array} atMobiles 被@人的手机号(在text内容里要有@手机号)
   */
  constructor (isAtAll = false, atMobiles = []) {
    this.isAtAll = isAtAll
    this.atMobiles = atMobiles
  }
}
