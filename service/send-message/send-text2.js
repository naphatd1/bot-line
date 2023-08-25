exports.sendText2 = (event) => {
  let msg
  let msg2 = event.message.text.toLowerCase().trim()
  if (msg2 === 'promotions' || 'โปรโมชั่น') {
    msg = { type: 'text', text: 'วัคซีนราคา 1,500 บาท' }
  } else {
    msg2 = { type: 'text', text: 'สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง' }
  }
  return msg
}
