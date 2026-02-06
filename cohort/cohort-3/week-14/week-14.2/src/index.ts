interface People{
    name:string;
    age:number;
    isLegal():boolean;
    // greet:()=>string
}

// let  person:People = {
//     name:"Kamlesh",
//     age:19,
//     greet:()=>{
//         return "hello mfs"
//     }
// }
//  let greeeting  = person.greet();

class Manager implements People{
    name:string;
    age:number;
    number:string

    constructor(name:string,age:number){
        this.name = name;
        this.age= age;
        this.number = "wgduy"
    }
    isLegal(): boolean {
        return this.age>18
    }
 }

 let user = new Manager("arjun",22);
 console.log(user.isLegal())