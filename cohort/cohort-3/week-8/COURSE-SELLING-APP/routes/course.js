const {Router} = require("express")
const courseRouter =Router()
const {userMiddleware} = require("../middleware/user");
const { purchaseModel, courseModel } = require("../database/db");

courseRouter.post("/purchase",userMiddleware,async(req,res)=>{
    //expect money to pay
    const userId  = req.userId;
    const courseId  = req.body.courseId;

    const course   = await purchaseModel.create({
        userId,
        courseId
    })
    //TODO: build the course descriptio where course detials and content of course
    res.json({
        message:"you have succesfully bought the course"
    })
})

courseRouter.get("/preview",async(req,res)=>{
    const courses = await courseModel.find({
    })
    res.json({
        courses
    })
})

module.exports = {
courseRouter:courseRouter
}