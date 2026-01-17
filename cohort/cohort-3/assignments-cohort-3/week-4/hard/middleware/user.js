
const jwt  = require("jsonwebtoken")
const JWT_SECRET = "ilavekaira"

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.token;

    try{
        const userVerify = jwt.verify(token,JWT_SECRET)
        if(userVerify){
            req.userId=userVerify.id
            next();
        }
    }catch(error){
        res.status(403).json({
            message:"incorrect credentials or token"
        })
            
        }
    
}

module.exports = {JWT_SECRET,userMiddleware };