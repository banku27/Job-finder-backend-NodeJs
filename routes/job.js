const jobController = require("../controllers/jobController");
const { verifyAndAuthorization , verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();
// const jwt =  require("jsonwebtoken");

// Post Job 

router.post("/",verifyAndAuthorization, jobController.updateUser);

// Delete user 
// router.delete("/:id",verifyAndAuthorization, jobController.deleteUser);

//get user
// router.get("/:id",verifyAndAuthorization, jobController.getUser);

//get all users
// router.get("/", verifyAndAdmin, jobController.getAllUsers);



module.exports = router