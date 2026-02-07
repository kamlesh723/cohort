// pick API

interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string
};

type updateProps = Pick<User, 'name'| 'age'| 'email'>

// it makes propties to optional
type updatePropsOptional = Partial<updateProps>

function updateUser(updateProps:updatePropsOptional){
    // hit the datbase to update the user
}

updateUser({
    name:"kamlesh"
})