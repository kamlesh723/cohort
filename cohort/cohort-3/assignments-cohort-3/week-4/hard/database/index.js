const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
// Connect to MongoDB
mongoose.connect("mongodb+srv://kamlesh-db-user:admin123@cluster0.wnyvkq8.mongodb.net/todo-assingmet-2");

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    name:String,
    email:{type:String,unique:true},
    password:String
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    userId:ObjectId,
    done:Boolean
});

const User = mongoose.model('Users', UserSchema);
const Todo = mongoose.model('Todos', TodoSchema);

module.exports = {
    User,
    Todo
}