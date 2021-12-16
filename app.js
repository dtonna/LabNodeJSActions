const express = require('express')
require('dotenv').config()
const port = process.env.port || 8000;
const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(port, () => console.log(process.env.NODE_ENV + ' Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

module.exports = app
