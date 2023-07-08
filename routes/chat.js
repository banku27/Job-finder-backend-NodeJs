const router = require("express").Router();
const chatController = require("../controllers/chatController");
const { verifyAndAuthorization , verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");

//Create Chart
router.post("/",verifyAndAuthorization, chatController.accessChat);


// GET Chats
router.get("/",verifyAndAuthorization, chatController.getChat);



module.exports = router