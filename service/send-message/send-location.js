exports.sendLocation = () => {
  let msg = {
    type: 'location',
    title: 'my location',
    address: '1-6-1 Yotsuya, Shinjuku-ku, Tokyo, 160-0004, Japan',
    latitude: 35.687574,
    longitude: 139.72922,
  }
  return msg
}
