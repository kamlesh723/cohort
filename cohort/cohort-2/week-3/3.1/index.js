//repeated code even if i use function for thses then also code is very lengthy so here
// commes MIDDLWARES in Picture when we have to do prechecks

const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;


    if(username !="admin" || password!="admin"){
        res.status(400).json({
            "msg":"something up with your input"
        })
        return;
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            "msg":"something up with your input"
        })
        return;
    }

     res.json({
                msg:"your kidney is fine"
            })
        
});
app.put("/replace-kidney",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;


    if(username !="admin" || password!="admin"){
        res.status(403).json({
            "msg":"user doesn't exists"
        })
        return;
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            "msg":"user doesn't exists"
        })
        return;
    }

     res.json({
                msg:"your heart is fine"
            })
        
});

app.listen(3000);