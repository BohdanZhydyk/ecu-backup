const express = require('express')
const cors = require('cors')
const fileupload = require('express-fileupload')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { unixToDateTimeConverter } = require('./functions')

const adminRoutes = require('./routes/AdminRoutes')

app.use( cors() )
app.use( express.json() )
app.use( fileupload() )

app.use( bodyParser.urlencoded({ extended: true }) )

// API routes
app.use(adminRoutes)

// Static frontend
app.use(express.static(path.join(__dirname, 'public')))

// Obsługa frontendu tylko dla nieznanych tras
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(adminRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  const DT = unixToDateTimeConverter()
  const txt1 = `SERVER started on PORT ${PORT}`
  const txt2 = `${DT?.year}/${DT?.month}/${DT?.day}-${DT?.hour}:${DT?.min}:${DT?.sec}`
  console.log(`${txt1} - ${txt2}`)
})
