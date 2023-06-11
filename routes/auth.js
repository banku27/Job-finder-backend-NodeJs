const router = require("express").Router();
const authController = require("../controllers/authContoller");
// const jwt =  require("jsonwebtoken");

// REGISTRATION 

router.post("/register", authController.createUser);


// LOGIN 
router.post("/login", authController.loginUser);


module.exports = router