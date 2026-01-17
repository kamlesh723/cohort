const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();

const JWT_SECRET  = "mynameispanda"
app.use(express.json());

const users = [];
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

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

function auth(req,res,next){
    const token = req.headers.token//the token 
    const decodeInformation = jwt.verify(token,JWT_SECRET);
    if(decodeInformation.username){
        req.username = decodeInformation.username
        next();

    }else{
        res.json({
            message:"you are nopt loged in"
        })
    }
}

app.get("/me",auth,(req,res)=>{
    //{username:kamlesh@gmail.com}
    const currentuser = req.username;
    const founduser = users.find(founduser=>founduser.username === currentuser)
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