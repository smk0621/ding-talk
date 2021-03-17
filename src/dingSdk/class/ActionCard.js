export default class ActionCard {
  /**
   * ActionCard
   * @param {string} title
   * @param {string} text
   * @param {array} btns new Btn()
   * @param {string} btnOrientation '1' '0' 是否按钮垂直显示
   * @param {string} hideAvatar '1' '0' 是否显示头像
   */
  constructor (title, text, btns = [], btnOrientation = '1', hideAvatar = '1') {
    this.title = title
    this.text = text
    this.btns = btns
    this.btnOrientation = btnOrientation
    this.hideAvatar = hideAvatar
  }

  static whole (title, text, singleTitle, singleURL, btnOrientation = '1', hideAvatar = '1') {
    const actionCard = new ActionCard(title, text)
    actionCard.singleTitle = singleTitle
    actionCard.singleURL = singleURL
    return actionCard
  }
}
