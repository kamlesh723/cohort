const {Router} = require("express")
const adminRouter = Router();
const {adminModel, courseModel} = require("../database/db")
const {adminMiddleware} = require("../middleware/admin")
const jwt  = require("jsonwebtoken")
const {JWT_ADMIN_PASSWORD} = require("../config");
adminRouter.post("/signup",async(req,res)=>{
    const {email, password,firstName,lastName}= req.body;/// todo: input validation
    // hash the paasssword and store hashed passsword in db

   try{ 
    await adminModel.create({
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
    res.status(500).json({ error: 'Server error signup' })
}
})

adminRouter.post("/signin",async(req,res)=>{
    const {email,password} = req.body

   try{
    //todo:password sould be hashed , so will call bcrypt and compare then will let login te admin
     const admin  = await adminModel.findOne({
        email:email,
        password:password
    });

    if(admin){
      const token = jwt.sign({
            id:admin._id,
        },JWT_ADMIN_PASSWORD)
        console.log("token got")
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
adminRouter.post("/course",adminMiddleware,async(req,res)=>{
    const adminId = req.userId;
      const {title, description, imageUrl, price} = req.body;
    //creating a web3 saas in 6 hours go from youtube cvidseo
   const course =  await courseModel.create({
        title,
        description,
        imageUrl,price, 
        creatorId:adminId
    })
    res.json({
        message:"course created",
        courseId :course._id

    })
})
adminRouter.put("/course",adminMiddleware,async(req,res)=>{
     const adminId = req.userId; 
        const {title, description, imageUrl, price, courseId} = req.body;
    const course = await courseModel.updateOne({
        creatorId: adminId,
        _id:courseId/// if only will use id then ny other creaot can update the price and all other things so to avoid will also pass creatorid

    },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
    })

    res.json({
        message:"course updates succesfully",
        courseId:course._id
    })
})
adminRouter.get("/course/bulk",adminMiddleware,async(req,res)=>{
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId:adminId
    })
    res.json({
        message:"course fetched",
        courses
    })
})

module.exports= {
    adminRouter:adminRouter
}