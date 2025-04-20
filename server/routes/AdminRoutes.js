const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { ADMIN_LOGIN, ADMIN_HASHED_PASSWORD } = require('../credentials.js')


let bzToken = null

function generateBzToken() {
  const randomPart = Math.random().toString(36).substring(2, 15)
  return `bz_${Date.now()}_${randomPart}`
}

function checkBzToken(req) {
  const sentToken = req.headers['authorization']?.split(' ')[1]
  return sentToken && sentToken === bzToken
}

router.post('/api/login', async (req, res) => {

  const { login, password } = req.body

  if (login !== ADMIN_LOGIN) {
    return res.status(401).json({ success: false, errorType: 'login' })
  }

  if (!bcrypt.compareSync(password, ADMIN_HASHED_PASSWORD)) {
    return res.status(401).json({ success: false, errorType: 'password' })
  }

  bzToken = generateBzToken()
  return res.status(200).json({ success: true, bzToken })
  
})

module.exports = router
