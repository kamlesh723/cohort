const {JWT_USER_PASSWORD} = require("../config")
const jwt  = require("jsonwebtoken")
const express = require("express")
const app = express();

function userMiddleware(req,res,next){
    const token = req.headers.token;

    const verifyUser = jwt.verify(token,JWT_USER_PASSWORD);
     if(verifyUser)
     {
        req.userId = verifyUser.id;
        next();
     }
}
module.exports = {
    userMiddleware:userMiddleware
}