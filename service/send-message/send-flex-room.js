const axios = require('axios').default

exports.sendFlexRoom = async () => {
  const url = process.env.BASE_URL + '/getpromotion'
  // const url = 'http://localhost:8100/getpromotion'
  const response = await axios.get(url, {
    headers: { 'Content-Type': 'application/json' },
  })
  let bubbles = []
  let promotion = response.data
  
  bubbles = promotion.map((item) => {
    let postbackType = { type: 'roompromotion' }
    let newItem = { ...postbackType, ...item }
    return {
      type: 'bubble',
      size: 'mega',
      hero: {
        type: 'image',
        url: item.picture,
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
        action: {
          type: 'uri',
          uri: 'https://linecorp.com',
        },
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        action: {
          type: 'uri',
          uri: 'https://linecorp.com',
        },
        contents: [
          {
            type: 'text',
            text: `[ID: ${item.id}]  : ${item.name}`,
            size: 'xl',
            weight: 'bold',
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: '#905c44',
            margin: 'xxl',
            action: {
              type: 'postback',
              label: 'Add to Cart',
              data: JSON.stringify(newItem),
            },
          },
        ],
      },
    }
  })
  let msg = {
    type: 'flex',
    altText: 'this is a flex message',
    contents: {
      type: 'carousel',
      contents: bubbles,
    }
  }
  return msg
}
