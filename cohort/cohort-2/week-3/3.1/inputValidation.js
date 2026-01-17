const express = require("express");

const app = express();

app.use(express.json());
app.post("/health-checkup",function(req,res){
    // do something with kidney here
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;
    res.send("your kidney length is :"+kidneylength);
});



// global catches when error handling middlware
app.use(function(err, req,res,next){
    // console.log(err);//log error for debugging
    res.json({
        msg:"sorry something is up with our server"
    })
})
app.listen(3000);