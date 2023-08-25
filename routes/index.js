const express = require('express')
const router = express.Router()

const db = require('../config/mysql')
const axios = require('axios').default
const jwt_decode = require('jwt-decode')

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

router.get('/auth/callback', async function (req, res, next) {
  // console.log(req.query.code)
  // let code = req.query.code
  const url = 'https://api.line.me/oauth2/v2.1/token'
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: `${process.env.BASE_URL}/auth/callback`,
    client_id: process.env.LOGIN_CLIENT_ID,
    client_secret: process.env.LOGIN_CLIENT_SECRET,
  })
  const response = await axios.post(process.env.URL_LINE_LOGIN, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  const user = jwt_decode(response.data.id_token)
  return res.status(200).json({ user: user, response: response.data })
})

router.post('/bookvaccine', async function (req, res, next) {
  const conn = await db.connectMysql()
  const [result] = await conn.query('INSERT INTO book_vaccine SET ?', req.body)
  return res
    .status(200)
    .json({ bookId: result.insertId, message: 'จองวัคซีนสำเร็จ' })
})

module.exports = router
