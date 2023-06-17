const jobController = require("../controllers/jobController");
const { verifyAndAuthorization , verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();
// const jwt =  require("jsonwebtoken");

// Post Job 

router.post("/",verifyAndAdmin, jobController.createJob);

// Delete jOB 
// router.delete("/:id",verifyAndAuthorization, jobController.deleteJob);

// Update Job
// router.delete("/:id",verifyAndAuthorization, jobController.updateJob);

//get user
// router.get("/:id", jobController.getJob);

//get all users
// router.get("/", jobController.getAllJobs);

//Search Job    
// router.get("/search/:key", jobController.searchJobs);

module.exports = router