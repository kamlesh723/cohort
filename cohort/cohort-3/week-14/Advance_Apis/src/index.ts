// pick API

interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string
};

type updateProps = Pick<User, 'name'| 'age'| 'email'>


function updateUser(updateProps:updateProps){
    // hit the datbase to update the user
}
