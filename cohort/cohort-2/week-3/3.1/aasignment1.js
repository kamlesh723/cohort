// find the average time your server is taking to handle requests

const express = require("express");
const app = express();
 app.use(express.json());


 let totaltime= 0;
 let requestcount =0;

 app.use((req, res, next) => {
    const start = Date.now();

    res.on("finish",()=>{
        
        const end = Date.now();
        const time = end-start;

        totaltime+=time;
        requestcount++;

        const averagetime = totaltime/requestcount;
        console.log(averagetime);
        
    })
    next();
 });

 app.get("/health-checkup", function(req,res){
    console.log(req.body);
    res.json({
        msg:"hello mfs "
    })
});
app.listen(3000);