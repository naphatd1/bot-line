const { client } = require('../../config/line')

exports.deleteRichMenu = async (req, res, next) => {
  await client.deleteDefaultRichMenu()
}
