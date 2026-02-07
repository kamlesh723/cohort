// records
type User = {
    name:string;
    age:number
}
// type userAge = {
//     [key:string]:number
// }
// // using records
// type userAge = Record<string,{age:number,name:string}>
// const users:userAge = {
//     'abcw13':{age:22,name:"kmalesh"},
//     'bndsb':{age:33,name:"katappa"}
// }

// users["abcw13"]?.age;

///maps
const users= new Map<string,User>();
users.set('abcw13',{age:22,name:"kmalesh"})
users.set('bndsb',{age:33,name:"katappa"})

const user = users.get("kmalesh");
console.log(user)