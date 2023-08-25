const { client } = require('../config/line')
const { sendImage } = require('./send-message/send-image')
const { sendSticker } = require('./send-message/send-sticker')
const { sendText } = require('./send-message/send-text')
const { sendLocation } = require('./send-message/send-location')
const { sendImageMap } = require('./send-message/send-imagemap')
const { sendFlexCovid } = require('./send-message/send-flex-covid')
const { sendFlexRoom } = require('./send-message/send-flex-room')


exports.handleMessage = async (event) => {
  let msg
  switch (event.message.text.toLowerCase().trim()) {
    case 'text':
      console.log('5555')
      break
    case 'sushi':
      msg = sendSticker()
      break
    case 'image':
      msg = sendImage()
      break
    case 'location':
      msg = sendLocation()
      break
    case 'imagemap':
      msg = sendImageMap()
      break
    case 'covid':
      msg = await sendFlexCovid()
      break
    case 'promotion':
      msg = await sendFlexRoom(event)
      break
    default:
      msg = sendText(event)
      break
  }

  return client.replyMessage(event.replyToken, msg)
}
