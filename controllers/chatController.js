const Chat= require("../models/Chat");
const User= require("../models/User");

module.exports={

    accessChat: async (req,res)=>{},
    getChat: async (req,res)=>{
        try {
            Chat.find({users:{$elemMatch:{$eq:req.user.id}}})
            .populate("users","-password")
            .populate("groupAdmin","-password")
            .populate("latestMessage")
            .sort({updatedAt: -1})
            .then(async (results)=>{
                results=await User.populate(results,{
                    path:"latestMessage.sender",
                    select:"username profile email"
                });
                res.status(200).send(results);
            })
        } catch (error) {
            res.status(500).json("Failed to retrieve chat");
        }
    },

}