const mongoose =  require("mongoose");
const { object } = require("webidl-conversions");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

mongoose.connect("mongodb+srv://kamlesh-db-user:admin123@cluster0.wnyvkq8.mongodb.net/course-selling-app")

const userSchema = new Schema( {
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})
const adminSchema = new Schema( {
      email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})
const courseSchema = new Schema( {
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})
const purchaseSchema =new Schema(  {
    userId:ObjectId,
    courseId:ObjectId
    //add refrences using ref do ggogling
})


const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}