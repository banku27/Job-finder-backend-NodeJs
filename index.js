const express = require('express')
const app = express()
const dotenv= require('dotenv');
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const jobRoute = require("./routes/job")
const bookmarkRoute = require("./routes/bookmark")
const chatRoute = require("./routes/chat")
const messageRoute = require("./routes/message");
const { Socket } = require('socket.io');

dotenv.config();
// get variables from .env file || process.env.VARIABLE_NAME

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('Database connected')).catch((err)=>{console.log(err)});

// app.get('/', (req, res) => res.send('Hello Pankaj!'))
app.use(express.json());
app.use("/api/",authRoute);
app.use("/api/users",userRoute);
app.use("/api/jobs",jobRoute);
app.use("/api/bookmarks",bookmarkRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);

const server = app.listen(process.env.PORT||5002, () => console.log(`Example app listening on port ${process.env.PORT}!`));
// here 5002 is an alternative if 5001 does not work then 5002 port will be started. 
const io = require('socket.io')(server,{
    pingTimeout:60000,
    cors: {
        origin:"https://job-finder-backend-node-js-uuc9.vercel.app/"
    }
});

io.on("connection",(socket)=>{
    console.log("connected to sockets");

    socket.on('setup',(userId)=>{
        socket.join(userId);
        socket.broadcast.emit('online-user',userId)

        console.log(userId);
    });

    socket.on('typing',(room)=>{
      socket.join(room)
        console.log('User Joined:' + room);
    });

    socket.on('stop typing',(room)=>{
        console.log("stop typing");
        console.log("room");

        socket.to(room).emit('stop typing',room)
    });

    socket.on('join chat',(room)=>{
        console.log("stop typing");
        console.log("room");

        socket.to(room).emit('stop typing',room)
    });
    
    socket.on('new message',(newMessageReceived)=>{
        var chat=newMessageReceived.chat;
        var room=chat._id;

        var sender=newMessageReceived.sender;

        if (!sender || sender._id) {
            console.log("Sender not defined");
            return;
        }

        var senderId=sender._id;
        console.log(senderId + "message sender");
        const users = chat.users;

        if (!users) {
            console.log("User not defined");
            return;
        }

        socket.to(room).emit('message received',newMessageReceived);
        socket.to(room).emit('message sent',"New Message");
    });

    socket.off('setup',()=>{
        console.log('user offline');
        socket.leave(userId)
    })

});