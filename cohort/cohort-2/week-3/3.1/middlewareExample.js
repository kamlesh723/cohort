const express= require("express")

const app = express();


function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
       next();
    }else{
        res.status(411).json({
            msg:"sorry you are underAge"
        })
    }
}
app.use(isOldEnoughMiddleware)
app.get("/ride2",function(req,res){
    
        res.json({
            msg:"you have succesfully riden the ride 2"
        })
});
app.get("/ride2",function(req,res){
   

        res.json({
            msg:"you have succesfully riden the ride 1"
        })
    
});
app.listen(3000);