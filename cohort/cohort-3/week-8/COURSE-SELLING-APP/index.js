const express = require("express")
const app = express()
const mongoose =  require("mongoose");
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin");
// const { MongoExpiredSessionError } = require("mongodb");
app.use(express.json())

port = 3000

app.use("/user",userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)


async function main(){
    await mongoose.connect("mongodb+srv://kamlesh-db-user:admin123@cluster0.wnyvkq8.mongodb.net/course-selling-app")
    app.listen(port, ()=>{
        console.log(`app is listening on ${port}`)
    })

}
main()