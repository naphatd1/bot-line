const axios = require('axios').default

exports.sendFlexCovid = async () => {

  const url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
  const response = await axios.get(url, {
    headers: { 'Content-Type': 'application/json' },
  })

  const date = response.data[0].update_date.split(' ')[0]
  const [year, month, day] = date.split('-')
  const thaiMonths = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ]
  const thaiMonth = thaiMonths[parseInt(month, 10) - 1]
  // แปลงปีเป็น พ.ศ.
  const buddhistYear = parseInt(year, 10) + 543
  const formattedDate = `${day} ${thaiMonth} ${buddhistYear}`

  let msg = {
    type: 'flex',
    altText: `Covid 19`,
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: 'https://codingthailand.com/covid_cover.png',
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
        action: {
          type: 'uri',
          uri: 'https://covid19.ddc.moph.go.th/',
        },
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'Covid 19',
            weight: 'bold',
            size: 'xl',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'ผู้ป่วยรายใหม่',
                    color: '#F71959',
                    size: 'md',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: `${response.data[0].new_case} ราย`,
                    wrap: true,
                    color: '#F71959',
                    size: 'md',
                    flex: 5,
                    align: 'end',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'ผู้เสียชีวิต',
                    color: '#000000',
                    size: 'md',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: `${response.data[0].new_death} ราย`,
                    wrap: true,
                    color: '#000000',
                    size: 'md',
                    flex: 5,
                    align: 'end',
                  },
                ],
                margin: 'md',
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'ข้อมูลล่าสุดเมื่อวันที่ ',
                    color: '#000000',
                    size: 'md',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: formattedDate,
                    wrap: true,
                    color: '#000000',
                    size: 'md',
                    flex: 5,
                    align: 'end',
                  },
                ],
                margin: 'md',
              },
            ],
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'primary',
            height: 'sm',
            action: {
              type: 'uri',
              label: 'ดูข้อมูลเพิ่มเติม',
              uri: 'https://linecorp.com',
            },
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            margin: 'sm',
          },
        ],
        flex: 0,
        margin: 'lg',
      },
    },
  }
  return msg
}
