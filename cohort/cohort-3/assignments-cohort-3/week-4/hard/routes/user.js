const { Router } = require("express");
const router = Router();
const {userMiddleware,JWT_SECRET} = require("../middleware/user");
const bcrypt = require("bcrypt")
const {User,Todo} = require("../database/index")
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const name= req.body.name
    const email=req.body.email
    const password=req.body.password
    
    try{
        const hashedpassword = await bcrypt.hash(password,5)
        console.log("paswrod hashed")
        await User.create({
            name:name,
            email:email,
            password:hashedpassword
        })
        res.json({
            message:"you are signed up succesfully"
        })
    }catch(error){
        res.status(400).json({
            message:"SignUp failed",
            error:error.message
        })
    }
});

router.post('/login',async (req, res) => {
     // Implement user login logic
     const email=req.body.email
    const password=req.body.password
    
    try {
        const dbuser =  await User.findOne({
             email:email
         })
         if(!dbuser){
             res.status(403).json({
                 message:"user not found in db"
             })
         }  
         const passwordMattch =await  bcrypt.compare(password,dbuser.password);
         if(passwordMattch){
             const token = jwt.sign({
                 id:dbuser._id
             },JWT_SECRET)
             res.json({  
                 token:token   
             })
         }else{
             res.status(403).json({
                 message:"incorrect credentials"
             })
         }
    } catch (error) {
        res.status(500).json({
            message:"login failed",
            error: error.message
        })
    }

});

router.get('/todos', userMiddleware,async (req, res) => {
    // Implement logic for getting todos for a user
   const userId=req.userId;

   try {
       const todos = await Todo.find({
        userId:userId
       })
       res.json({
        todos
       })
    
   } catch (error) {
     res.status(500).json({
            message: "Failed to fetch todos",
            error: error.message
        });
   }

});


router.post('/logout', userMiddleware, async (req, res) => {
        res.json({
        message: "Logout successful. Please remove token from client side."
    });
});

module.exports = router