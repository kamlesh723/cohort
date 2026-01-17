const express = require("express")
const app = express();

// const bodyParser = require("body-parser")
app.use(express.json())// json() als retuns a object so that's why use brackets
// under the hood this uses body-parser //
function middleware(req,res,next){
    console.log("methiod is:"+req.method)
    console.log("url is is"+ req.url)
    console.log("hostname  is"+ req.hostname)
    console.log(new Date())
    next()
}

//very long file
app.use(middleware);

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