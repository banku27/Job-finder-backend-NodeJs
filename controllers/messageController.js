const Chat = require("../models/Chat");
const Message= require("../models/Message");
const User = require("../models/User");

module.exports = {

    getAllMessage: async (req,res)=>{

        try {
            const pageSize=12;//Number of messages per page
            const page = req.query.page ||1 // Current Page number

            //calculate the number of messages to skip
            const skipMessages= (page-1) * pageSize;

            //find messages with pagination
            var messages= await Message.find({chat:req.params.id})
            .populate("sender", "username profile email")
            .populate('chat')
            .sort({createdAt:-1}).skip(skipMessages)   // sort message by descending order
            .limit(pageSize)  // limit the number of messsages per page

            messages = await User.populate(messages,{
                path:"chat.users",
                select:"username profile email"
            });

            res.json(messages);
            
        } catch (error) {
            res.status(500).json({error:"Couldn't retrive messages"});
        }
    },
    sendMessage: async (req,res)=>{
        const {content, chatId, receiver}=req.body;
        if (!content ||!chatId) {
            console.log('Invalid data');
            return res.status(400).json("Invalid data");
        }
        var newMessage={
            sender:req.user.id,
            content:content,
            receiver:receiver,
            chat:chatId
        };
        try {
            var message=await Message.create(newMessage);
            message= await message.populate("sender","username profile email");
            message= await message.populate("chat");
            message= await User.populate(message,{
                path: "chat.users",
                select:"username profile email",
            });
            await Chat.findByIdAndUpdate(req.body.chatId,{
                latestMessage:message
            });

            res.json(message);
        } catch (error) {
            res.status(400).json({error:error});
        }
    }
}