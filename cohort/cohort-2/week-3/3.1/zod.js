// it's used for better validation inpurt, before this the validation code is sugly

const express = require("express")

const zod = require("zod")
const app = express()


const schema = zod.array(zod.number());
//
//{
//email: string =?@,.com
//password : atlest 8 digits
//country : 'in' or "us"
//}
//
app.use(express.json());

app.post("/health-checkup",function(req,res){
    // do something with kidney here
     console.log('headers:', req.headers);
  console.log('body:', req.body);
    // const kidneys = req.body;
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"input is valid"
        })
    }

    res.send({
        response
    })
});
app.listen(3000);