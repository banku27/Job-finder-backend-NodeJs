const userController = require("../controllers/userController");
const { verifyAndAuthorization , verifyToken } = require("../middleware/verifyToken");

const router = require("express").Router();
// const jwt =  require("jsonwebtoken");

// Update User 

router.put("/:id",verifyAndAuthorization, userController.updateUser);

// LOGIN 
// router.post("/login", authController.loginUser);

module.exports = router