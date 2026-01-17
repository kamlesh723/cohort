const express = require("express")
const app = express();


app.get("/sum/:a/:b", function(req, res) {
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b)
    res.json({
        ans: a + b
    })
});
app.get("/multiply",(req,res)=>{
    const a = req.params.a;
    const b = req.params.b;

    res.json({
        answer:a*b
    })
})
app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});


app.listen(3000)