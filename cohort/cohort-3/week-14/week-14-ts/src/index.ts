function greet(user:{
    name:string,
    age:number
}){
    console.log("hello"+ user.name);
}

let user={
    name:"kamlesh",
    age:19
}
greet(user)