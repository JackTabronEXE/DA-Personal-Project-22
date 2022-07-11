const path = require('path')
const express = require('express')
const contactRoutes = require('./routes/contacts')
const skillsRoutes = require('./routes/skills')
const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/skills', skillsRoutes)

server.use('/api/v1/contacts', contactRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})



module.exports = server
