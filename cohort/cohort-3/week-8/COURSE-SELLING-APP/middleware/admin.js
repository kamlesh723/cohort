const jwt  = require("jsonwebtoken")
const express = require("express")
const app = express()
const {JWT_ADMIN_PASSWORD} = require("../config")

function adminMiddleware(req,res,next){
    const token = req.headers.token;

    const verifyUser = jwt.verify(token,JWT_ADMIN_PASSWORD);
     if(verifyUser)
     {
        req.userId = verifyUser.id;
        next();
     }else{
        res.status(403).json({
            message:"ypu are not signed in"
        })
     }
}
module.exports = {
    adminMiddleware:adminMiddleware
}