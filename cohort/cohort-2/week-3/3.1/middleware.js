//
const express = require("express");

const app = express();

let numberofrequest = 0;

function calculateRequests(req,res,next){
    numberofrequest++;
    console.log(numberofrequest);
    next();
}
app.use(calculateRequests);// this mean it will be sued with every below route, and  will do next
app.use(express.json());// we need this for body in postman, that what it will give like text, json.. or anything
//else so it does parse the data ...

app.get("/health-checkup", function(req,res){
    console.log(req.body);
    res.json({
        msg:"hello mfs "
    })
});
app.post("/health-checkup", function(req,res){
    console.log(req.body);
    res.json({
        msg:"i there mfs "
    })
});

// function userMiddleware(req,res,next){
//      if(username !="admin" && password!="admin"){
//         res.status(403).json({
//             "msg":"incorrect input"
//         })
// }
// else{
//     next();
// }
// };
// function kidneyMiddleware(req,res,next){
//       if(kidneyId!=1 && kidneyId!=2){
//         res.status(400).json({
//              "msg":"incorrect input"
//         })
       
//     }
// else{
//     next();
// }
// };
// app.get("health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
//     //do something with kidney

//     res.send("your heart is healthy");
// });
app.listen(3000);