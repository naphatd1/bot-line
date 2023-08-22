exports.sendQuickReply = () => {
  let msg = {
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'cameraRoll',
            label: 'Send photo',
          },
        },
        {
          type: 'action',
          action: {
            type: 'camera',
            label: 'Open camera',
          },
        },
      ],
    },
  }
  return msg
}
