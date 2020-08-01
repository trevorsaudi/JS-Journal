const socket = io(); // we get access to io() because of the script tag we added in chat.html

//catching an event from the server
socket.on('message', message =>{
    console.log(message);

})