// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs/promises')

async function cleaned() {
  const data =   await fs.readFile("a.txt","utf-8")
  const cleaner = data.replace(/\s+/g,' ')
     await fs.writeFile("a.txt",cleaner)
     console.log("file cleaned")
}
cleaned()
// fs.readFile("a.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//         return;
//     }
// })
// const cleaner = data.replace(/\s+/g,' ')
// fs.writeFile("a.txt",cleaner,function(err,data){
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("file cleaned bitch")
// })
//  s = "hello     world    my    name   is       raman"
//  s = s.replace(/\s+/g, ' ');
//  console.log(s)