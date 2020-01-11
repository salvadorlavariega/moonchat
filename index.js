'use strict'
const http =  require('http')
const path = require('path')
const express = require('express')
const socketio = require('socket.io')
 
const port = process.env.PORT || 8080
const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')))
const users = {}
io.on('connection', socket => {
      socket.on('new-user', data => {
        users[socket.id] = data.username
        socket.broadcast.emit('user-is-online', data)
      })
      socket.on('send-message', message => {
        socket.broadcast.emit('chat-to-user', { message: message, name: users[socket.id] })
      })
      socket.on('offline', () => {
        socket.broadcast.emit('user-is-offline', users[socket.id])
        delete users[socket.id]
      })   
      
})

function handleFatalError(err){
 console.error( err.message)
 console.error(err.stack)
 process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(port, () => {
    console.log(` server listening on port ${port}`);
})