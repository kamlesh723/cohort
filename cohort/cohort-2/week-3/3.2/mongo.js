const express = require("express");
const app = express();
app.use(express.json());
const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://kamlesh-db-user:admin123@cluster0.wnyvkq8.mongodb.net/")

const User = mongoose.model('Users', {name:String, email:String, password:String});

app.post("/signup", async function(req, res){
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;

        const existinguser = await User.findOne({email: username});
        if(existinguser){
            return res.status(400),send("usernmae already exists");
        }
        const user = new User({
            name:'kamlesh yadav',
      email:'kamlejs@wxam.com',
      password:'123456'
    });
    user.save();
    res.json({
        "msg": "user created succesfully"
    })

});
