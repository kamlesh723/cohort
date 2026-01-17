// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

fs.readFile('a.txt',"utf-8",function(err,data){
        console.log("the data from the file is :"+ data)
});
    let sum =0;
    for(let i=0;i>50000000000;++i){
        sum+=i;
    }

    console.log("end of the program");//before this ithe file was ready even bu then also it hadreadthat in last

