//Type
//tsc dont convert the interface to js
//uses the interface for type checking
// interface keyPair{
//     key:number;
//     value:string;
// }

// let kv1:keyPair = {key:1, value:"Steve"}

// let kv1:keyPair = {key:1, val:"Steve"}

// let kv2:keyPair = {key:1, value:22}

//Interface as a function type
// interface KeyValueProcessor{
//     (key:number, value:string):void
// };

// function fn1(key:number):void{
//     console.log(key)
   
// }

// let kvp: KeyValueProcessor = fn1
// kvp(11);

// interface IPerson{
//     empname:string;
//     empgender:string
// }
// interface IEmployee extends IPerson{
//     empid :number
// }

// let obj:IEmployee={
//     empid:1,
//     empname:"name",
//     empgender:"Male"
// }


// interface IPerson{
//     empname:string;
//     empgender:string;
//     getSalary:(number)=>number;
// }

// class Employee implements IPerson{
//     empname:string;
//     empgender:string;
//     getSalary(id:number):number{
//         return 666;
//     }

//     constructor(a:string, b:string){
//         this.empname = a;
//         this.empgender = b;
//     }
// }

// let emp = new Employee("Jim", "Male");


// interface IF {
//     readonly name:string;
//     ssn:number;
// }

// let personObj:IF = {ssn:42342342, name:"John"}

// personObj.name = "Jim"
