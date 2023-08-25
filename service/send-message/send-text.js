exports.sendText = (event) => {
  let msg
  let msgText = event.message.text.toLowerCase().trim()
  if (msgText === 'hello') {
    msg = { type: 'text', text: 'world' }
  } else if (msgText === 'liff') {
    msg = { type: 'text', text: 'https://liff.line.me/2000504595-ArmOlkQq' }
  } else if (msgText === 'จองวัคซีนสำเร็จ') {
    msg = { type: 'text', text: 'ขอบคุณที่จองวัคซีนกับเรา' }
  } else {
    msg = { type: 'text', text: 'สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง' }
  }
  return msg
}
