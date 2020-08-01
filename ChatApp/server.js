const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


//2.setting the static ofler
app.use(express.static(path.join(__dirname, 'public')));

//run when a client connects
io.on('connection', socket => {
    console.log('New Socket Connection');

   

//sending an event to the client side
    socket.emit('message','Welcome to ChatCord!');

 //Broadcast when a user connects
 //broadcast emits to everyone except the user conecting

    socket.broadcast.emit('message','A user has joined the chat');

    //Runs when client disconnects
    socket.on('disconnect', ()=>{
        io.emit('message','A user has left the chat')
    });


    // io.emit() = for all the clients in general

})




const PORT = 3000 || process.env.PORT;
//1.spinning up the server
server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
