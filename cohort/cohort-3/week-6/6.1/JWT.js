const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();

const JWT_SECRET  = "mynameispanda"
app.use(express.json());

const users = [];

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username)

    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"hey! you are signed up"
    })
    console.log(users);
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user=>user.username === username && user.password === password)

    if(user){
        const token = jwt.sign({
            username:username
        },JWT_SECRET);//conert this into jwt
        user.token = token;
        res.json({
            token:token
        })
        
    }else{
        res.status(403).send({
            message:"invalid username or password"
        })
    }
    console.log(users);
});

app.get("/me",(req,res)=>{
    const token = req.headers.token//the token 
    const decodeInformation = jwt.verify(token,JWT_SECRET);//{username:kamlesh@gmail.com}
    const username =decodeInformation.username;
    const founduser = users.find(founduser=>founduser.username === username)
    if(founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    
    }else{
        res.json({
            message:"token Invalid"
        })
    }
})
app.listen(3000)