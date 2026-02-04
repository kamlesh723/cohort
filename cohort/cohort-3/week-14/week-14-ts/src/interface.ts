let firstName:string = "kamlesh"
let age:number = 20


// interfaces are used for types of complex objects
interface UserType{
    firstName:string,
    lastName:string
    age:number
}

function greet(user:UserType){

}

let user: UserType={
    firstName:"kamlesh",
    lastName:"yadav",
    age:21
}