const express = require("express");
const jwt  = require("jsonwebtoken")
const JWT_SECRET = "s3cret";
const app = express();
app.use(express.json());

function auth(req,res,next){
    const token = req.headers.token;
    const decodeData = jwt.verify(token, JWT_SECRET);
    if(decodeData){
        req.userId = decodeData.id;
        next();
    }else{
        res.status.json({
            message:"wrong credentials"
        })
    }
}

module.exports = {
   auth,
   JWT_SECRET
}