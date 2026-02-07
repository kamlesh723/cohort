// interface vs types
// //create two types called user and admin
// create admin and user interfacea and return "welcome [name]"

interface Admin{
    name:string,
    permission:string
}

interface User{
    name:string,
    age:number
}

type UserOrAdmin = User | Admin

function greet(user: UserOrAdmin){
    console.log(user.name)
}


