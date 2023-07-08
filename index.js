const express = require('express')
const app = express()
const dotenv= require('dotenv');
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const jobRoute = require("./routes/job")
const bookmarkRoute = require("./routes/bookmark")
const chatRoute = require("./routes/chat")
const messageRoute = require("./routes/message")

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

app.listen(process.env.PORT||5002, () => console.log(`Example app listening on port ${process.env.PORT}!`))
// here 5002 is an alternative if 5001 does not work then 5002 port will be started. 