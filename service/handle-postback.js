const config = require('../config/line')

exports.handlePostBack = (event) => {
  let postbackData = event.postback.data
  let data = JSON.parse(postbackData)
  let msg

  if (data.type === 'roompromotion') {
    msg = [
      { type: 'text', text: 'รายละเอียดโปรโมชั่น' },
      { type: 'text', text: 'ราคา ' + data.price },
    ]
  }

  // push message
  // console.log('User Id' + event.source.userId)
  // let msg2 = { type: 'text', text: 'sticker' }
  // let msg3 = { type: 'text', text: 'ไบรท์ กินข้าวยัง' }

  // return config.client.broadcast(msg2)

  // return config.client.pushMessage(event.source.userId,msg2)

  return config.client.replyMessage(event.replyToken, msg)
}
