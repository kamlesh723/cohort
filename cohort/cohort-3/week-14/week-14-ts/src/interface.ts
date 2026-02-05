// if need same code multiple places

interface Address{
    city?:String;
        country?:String;
        pincode:number
}


interface User {
    name:String;
    age:number;
    address:Address
}
interface Office{
    address:Address
}

// if i use undefined then have to also in this give as undefined
let user2:User = {
    name:"katappa",
    age:22,
    address:{
        pincode:332705
    }
}
let user:User = {
    name:"Kamlesh",
    age:5,
    address:{
        city:"chandigarh",
        country:"INDIA",
        pincode:332707
    }
}