const express = require("express");
const {z} = require("zod")
const bcrypt = require("bcrypt");
const mongoose  = require("mongoose");
const {UserModel, TodoModel} = require("./db")
const { auth, JWT_SECRET } = require("./auth");
const jwt  = require("jsonwebtoken")
// const JWT_SECRET = "s3cret";
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://kamlesh-db-user:admin123@cluster0.wnyvkq8.mongodb.net/todo-7-2")

app.post("/signup", async function(req, res) {

    //the passwordhas 1 uppercase , 1 lowercase and 1 spl character
    const requirebody = z.object({
        email:z.string().min(3).max(100),
        password:z.string().min(3).max(100),
        name:z.string().min(3).max(100)
    })
    console.log(requirebody)
    // const parseData = requirebody(req.body)//it will terminate if the error come so we prfere to use safe parse
    const parsedataWithsuccess = requirebody.safeParse(req.body);
//     //{
//     success:tru|false,
//     data:{}
//     error:[]
    
// }
    console.log(parsedataWithsuccess)
    if(!parsedataWithsuccess.success){
        res.json({
            message:"incorrect detials",
            error:parsedataWithsuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorthrow = false;
//    try {
    const hashedPassword = await bcrypt.hash(password,5);
    console.log(hashedPassword)
  await UserModel.create({
        email:email,
        password:hashedPassword,
        name:name
    })
    // }catch(e){
    //     res.json({
    //     messsages:"user already exist"
    // })
    // errorthrow = true;
    // }
    // if (!errorthrow){
        res.json({
            messsages:"you are Signed up"
        // })

    })
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user =  await UserModel.findOne({
        email:email
    })

    if(!user){
        res.status.jsn({
            message:"User is not fund in our DB"
        })
    }

    const passwordMatch =await bcrypt.compare(password, user.password);

    if(passwordMatch){
        // console.log(user._id);
        const token = jwt.sign({
            id:user._id.toString()
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
});


app.post("/todo", auth,function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    TodoModel.create({
        title,
        userId,
        done
    })

    res.json({
        userId:userId
    })
   
});



app.get("/todos", auth,async function(req, res) {
     const userId = req.userId;

     const users = await TodoModel.find({
        userId:userId
     })
    res.json({
        todos
    })
});

app.listen(3000);


