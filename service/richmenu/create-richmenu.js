const { readFileSync } = require('fs')
const path = require('path')
const { client } = require('../../config/line')

exports.createRichMenu = async () => {
  const richMenuAA = {
    size: {
      width: 2500,
      height: 1686,
    },
    selected: true,
    name: 'Rich Menu 1',
    chatBarText: 'Bulletin',
    areas: [
      {
        bounds: {
          x: 0,
          y: 0,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          label: 'Home',
          uri: 'https://www.google.com/',
        },
      },
      {
        bounds: {
          x: 834,
          y: 0,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          label: 'Facebook',
          uri: 'https://web.facebook.com/',
        },
      },
      {
        bounds: {
          x: 1666,
          y: 0,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          label: 'Store',
          uri: 'https://www.centralworld.co.th/en/home',
        },
      },
      {
        bounds: {
          x: 0,
          y: 843,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          label: 'Google',
          uri: 'https://www.google.com/',
        },
      },
      {
        bounds: {
          x: 843,
          y: 843,
          width: 833,
          height: 843,
        },
        action: {
          type: 'uri',
          label: 'Map',
          uri: 'https://www.google.com/maps/@14.9765725,102.1061111,15z?entry=ttu',
        },
      },
      {
        bounds: {
          x: 1667,
          y: 843,
          width: 833,
          height: 843,
        },
        action: {
          type: 'message',
          text: 'promotion',
        },
      },
    ],
  }
  //1. create richmenu
  const richMenuAAId = await client.createRichMenu(richMenuAA)
  console.log(richMenuAAId)
  //2. upload richmenu
  // const imagePath = path.resolve('./') + '/public/images/static/richmenu-aa.png'
  const imagePath = path.resolve('./') + '/public/images/static/richmenu_aa.jpg'
  const bufferImage = readFileSync(imagePath)
  await client.setRichMenuImage(richMenuAAId, bufferImage)

  //3. set default menu
  await client.setDefaultRichMenu(richMenuAAId)

  //4. create name alias to richmenu
  await client.createRichMenuAlias(richMenuAAId, 'richmenu-alias-aa')
}
