const config = require('../config/line')
const { handleMessage } = require('./handle-message')
const { handlePostBack } = require('./handle-postback')

exports.handleEvent = (event) => {
  switch (event.type) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          handleMessage(event)
          break
        case 'image':
          console.log('image message')
          console.log(event.message)
          break
        default:
          throw new Error(
            'Unknow event message',
            JSON.stringify(event.message.type)
          )
      }
      break
    case 'postback':
      // console.log('Room Pro Id' + event.postback.data)
      handlePostBack(event)
      break
    case 'follow':
      console.log('มีคนติดตามเพิ่ม : ' + event.source.userId)
      break
    case 'unfollow':
      console.log('มีคนยกเลิกติดตาม : ' + event.source.userId)
      break
    default:
      throw new Error('Unknow event', JSON.stringify(event))
  }
}
