const {Router} = require("express");
const { userModel, purchaseModel, courseModel } = require("../database/db");
const e = require("express");
const userRouter =Router()
const jwt  = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config")
const {userMiddleware} = require("../middleware/user");
userRouter.post("/signup",async(req,res)=>{
    // const email = req.body.email;
    // const password = req.body.password;
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    const {email, password,firstName,lastName}= req.body;/// todo: input validation
    // hash the paasssword and store hashed passsword in db

   try{ 
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
        res.status(201).json({
        message:"signed up success"
    })
}catch(error){
   console.log(error);
    res.status(500).json({ error: 'Server error during signup' })
}
})

userRouter.post("/signin",async(req,res)=>{
    const {email,password} = req.body

   try{

    //todo:password sould be hashed , so will call bcrypt and compare then will let login te user
     const user  = await userModel.findOne({
        email:email,
        password:password
    });
    if(user){
      const token  =   jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD)
        // to do cookie based autentication here
        res.json({
            token:token
        })
    }else{
       res.status(401).json({
    message:"incorrect credentials"
})
    }
    }catch(error){
        res.status(500).json({ error: 'Server error during signIN' })
    }
})
userRouter.get("/purchases",userMiddleware,async(req,res)=>{
    const userId = req.userId;
//should check that the user has paid the price
    const purchase = await purchaseModel.find({
        userId
    })
    const coursedata = await courseModel.find({
        _id: {$in: purchases.map(x=>x.courseId)}
    })
    res.json({
       purchase
    })
})


module.exports = {
    userRouter:userRouter
}