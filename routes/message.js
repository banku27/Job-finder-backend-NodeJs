const router = require("express").Router();
const { verifyAndAuthorization , verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");

//Send Messages
router.post("/",verifyAndAuthorization, bookmarkController.createBookmark);


// GET All Messages
router.get("/:id",verifyAndAuthorization, bookmarkController.getBookmarks);



module.exports = router