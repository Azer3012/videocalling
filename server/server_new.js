const express = require("express");

const app = express();
const open = require("open");
const serverPort = 4443;
const http = require("http");

const server = http.createServer(app);

const io = require("socket.io")(server);

let sockets = {};
let users = {};

const sendTo = (connection, message) => {
  connection.send(message);
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index_new.html");
});

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
    if (socket.name) {
      socket.broadcast
        .to("chatroom")
        .emit("roommessage", { type: "disconnect", username: socket.name });
      delete sockets[socket.name];
      delete users[socket.name];
    }
  });
  socket.on("message", (message) => {
    console.log("Meesage recieved " + message);
    let data = message;
    switch (data.type) {
      case "login":
        console.log("user logged " + data.name);
        if (sockets[data.name]) {
          sendTo(socket, {
            type: "login",
            success: false,
          });
        } else {
          let templist = users;
          sockets[data.name] = socket;
          socket.name = data.name;
          sendTo(socket, {
            type: "login",
            success: true,
            username: data.name,
            userList:templist
          });
          socket.broadcast
            .to("chatroom")
            .emit("roommessage", { type: "login", username: data.name });
          socket.join("chatroom");
          users[data.name] = socket.id;
        }
        break;
        default:
            sendTo(socket,{
                type:'error',
                message:'command not found '+data.type
            })
            break;
    }
  });
});

server.listen(serverPort, () => {
  console.log("server runnig at " + serverPort);
});
