const input = [1,2,3,4]

const ans = input.map(function(i){
    return i*2;
});
console.log(ans)

//create a map function, takes arrray, and funcion as input 
//filter , map 
const c  = input.filter((n)=>{
    if(n%2==0){
        return true;
    }else{
        return false
    }
})
const arr = [1,2,3,4]

const ans1 = arr.map(function(i){
    return i*3
})
const ans3 = arr.filter((n)=>{
    if(n%3==0){
        return true;
    }else{
        return false
    }
})