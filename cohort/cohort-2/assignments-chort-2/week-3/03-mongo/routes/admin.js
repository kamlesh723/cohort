const express  = require("express")
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const {Admin, Course} = require("../db")


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if user with this username already exist if don't then create
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"Admin Created Successfully"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    //in real world have to use ZOD or any other libarary top input validation..
    const title  = req.body.title;
    const description = req.body.description;
    const imageLink  = req.body.imageLink;
    const price = req.body.price;

  const newCourse =  await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);
    res.json({
        message:"course created succesfully",courseId:newCourse._id
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    // const allCourses = 
    Course.find({})
    .then(function(response){
        res.json({
            courses:response
        })
    })
});

module.exports = router;