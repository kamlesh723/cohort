abstract class User{
    name:string;
    constructor(name:string){
        this.name = name
    }

    abstract greet():string;
    hello(){
        console.log("hello mfs");
    }
}

class Employee extends User{
    name:string;

    constructor(name:string){
        super(name);
        // whenver extend have to call super method
        this.name = name
    }
    greet(): string {
        return "hii"+this.name
    }
}