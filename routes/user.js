const userController = require("../controllers/userController");
const { verifyAndAuthorization , verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();
// const jwt =  require("jsonwebtoken");

// Update User 

router.put("/",verifyAndAuthorization, userController.updateUser);

// Delete user 
router.delete("/",verifyAndAuthorization, userController.deleteUser);

//get user
router.get("/",verifyAndAuthorization, userController.getUser);

//get all users
router.get("/all", userController.getAllUsers);



module.exports = router