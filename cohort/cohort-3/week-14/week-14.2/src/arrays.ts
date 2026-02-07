// Given an array of positive integers as input, return the maximum value in the array
function getMax(arr: number[]) {
    let maxValue = -100000000;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    return maxValue;
}

console.log(getMax([1, 2, 3]));


// Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    // return users.filter(x => x.age >= 18);
    let ans = [];

    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            ans.push(users[i])
        }
    }
    return ans;
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));