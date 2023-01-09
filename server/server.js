const express =require('express')

const app=express()
const open =require('open')
const serverPort=4443
const http=require('http')

const server=http.createServer(app)

const io=require('socket.io')(server)

const sendTo=(connection,message)=>{
    connection.send(message)
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html')
})

io.on("connection",(socket)=>{
    console.log('user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
    socket.on('message',(message)=>{
        console.log('Meesage recieved '+ message);
        sendTo(socket,message)
    })
})

server.listen(serverPort,()=>{
    console.log('server runnig at '+ serverPort);
})