const express = require("express")
const app = express();
const jwt = require("jsonwebtoken")
const JWT_SECRET = "iamthegreatest"
app.use(express.json())

const users = [];
app.post("/signup", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    // check if user doesn't exists already

    res.json({
        message:"ypu are signed up"
    })

})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const founduser = users.find(founduser=>founduser.username===username && founduser.password===password)
    if(founduser){
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"invalid credentials"
        })
    }

})

app.get("/me",(req,res)=>{
    const token = req.headers.token;
    const decodedata =jwt.verify(token, JWT_SECRET);
    // const decodedata =jwt.decode(token, JWT_SECRET);

    if(decodedata.username){

    const founduser = users.find(founduser=>founduser.username===decodedata.username)

        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }
})
app.listen(3000)