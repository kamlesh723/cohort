const express = require("express")

const zod = require("zod")
const app = express()

app.use(express.json());

function validateSchema(obj){

    const schema = zod.object({
        email:zod.string().email(),
        pass:zod.string().min(8)
    })
    const response = schema.safeParse(obj)
    console.log(response)
}

validateSchema({
    email:"kalesh@gmail.com",
    pass:"13278674"
});

application.post("/login", function(req,res){
    const response = validateSchema(req.body);
    if(response!=zod.success){
        res.json({
            msg:"your inputs are inavlid"
        })
        return;
    }
})