abstract class Person{
    abstract name:string;

    // constructor(name:string){
    //     // this.name = name;
    // }

    display():void{
        console.log(this.name);
    }
    abstract find(string):Person;
}

class Employee extends Person{
    empcpde:number;
    name:string;
    
    constructor(name:string, code:number){
       super();//must call super
       this.empcpde = code; 
    }

    find(name:string):Person{
        return new Employee(name, 1)
    }
}

let emp: Person = new Employee("John",99);
let r:Person = emp.find("John")


