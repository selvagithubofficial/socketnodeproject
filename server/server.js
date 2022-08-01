const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const publicPath = path.join('__dirname','/../public');

var app = express();

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log("A new user just connected server side");

    socket.on('disconnect', () => {
        console.log("A new user just disconnected  from client");
    })
})


server.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`)
    console.log(server);
})

