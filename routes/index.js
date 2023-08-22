const express = require('express')
const router = express.Router()
const db = require('../config/mysql')
const { createRichMenu } = require('../service/richmenu/create-richmenu')
const { deleteRichMenu } = require('../service/richmenu/delete-richmenu')

router.get('/getpromotion', async function (req, res, next) {
  const conn = await db.connectMysql()
  const [rows] = await conn.query(
    'select * from pro_room order by id desc limit 12'
  )
  return res.status(200).json(rows)
})

router.get('/getpromotion/:id', async function (req, res, next) {
  const conn = await db.connectMysql()
  const [rows] = await conn.query('select * from pro_room where id=?', [
    req.params.id,
  ])
  return res.status(200).json(rows[0])
})

router.get('/createrichmenu', async function (req, res, next) {
  await createRichMenu()
  return res.status(200).json({ message: 'Success Richmenu' })
})

router.get('/deleterichmenu', async function (req, res, next) {
  await deleteRichMenu()
  return res.status(200).json({ message: 'Success Delete Richmenu' })
})

module.exports = router
