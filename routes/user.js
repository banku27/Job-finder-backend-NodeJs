const userController = require("../controllers/userController");
const { verifyAndAuthorization , verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();
// const jwt =  require("jsonwebtoken");

// Update User 

router.put("/",verifyAndAuthorization, userController.updateUser);

// Delete user 
router.delete("/",verifyAndAuthorization, userController.deleteUser);

//get user
router.get("/:id",verifyAndAuthorization, userController.getUser);

//get all users
router.get("/", verifyAndAdmin, userController.getAllUsers);



module.exports = router