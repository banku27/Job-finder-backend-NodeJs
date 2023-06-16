const userController = require("../controllers/userController");
const { verifyAndAuthorization , verifyToken } = require("../middleware/verifyToken");

const router = require("express").Router();
// const jwt =  require("jsonwebtoken");

// Update User 

router.put("/:id",verifyAndAuthorization, userController.updateUser);

// Delete user 
router.delete("/:id", userController.deleteUser);

//get user
router.get("/:id", userController.getUser);

module.exports = router