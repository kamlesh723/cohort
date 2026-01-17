// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// // You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs/promises')
// fs.writeFile("a.txt","how are you bitch",function(err,data){
//     if(err){
//         console.log(err);
//         return;
//     }
// })
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data)
// })




///
async function main(){
   await fs.writeFile("a.txt","how are you bitch")
   let sum=0;
   for(let i=0;i<50000000;i++){
    sum+=i;
   }
   const data = await fs.readFile("a.txt","utf-8")
    console.log(data)
}
main()