const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const port = 3000
app.use(bodyParser.json());

// write any function then create thriugh query parameter variable and take Cquery  and pass in fucnton that value
app.get('/route-handler',function(req,res){
    const n= req.query.n;
    // res.send('hello mf!');
    res.send("hey bro...")
})


//middlewares

app.post('/', (req, res) => {
    console.log(req.body);
    // console.log("Headers received:", req.headers);
    // console.log("Authorization:", req.headers.authorization);

    res.send("hey mf's")
});

app.listen(port,()=>{
    console.log(`Exampe app listening on port ${port}`)
})

// create a todo app that lets's users store todos on the server
//try to create a http server from scratch in c
// create a http server in rust using actix-web
//create an http server in golang using the gorilla framework
// in spring boot java