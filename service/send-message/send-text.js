exports.sendText = (event) => {
  let msg
  let msgText = event.message.text.toLowerCase().trim()
  if (msgText === 'hello') {
    msg = { type: 'text', text: 'world' }
  } else {
    msg = { type: 'text', text: 'สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง' }
  }
  return msg
}
