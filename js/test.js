// async function f(){
//     let promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve("done")}, 2000)
//     });
//     let result = await promise;
//     console.log(result);
//     console.log("After await");
// }
// f();
// console.log("After promise");

class Thenable{
    constructor(num){
        this.num = num;
    }
    then(resolve, reject){
        // console.log(resolve)
        setTimeout(()=> resolve(this.num * 2), 2000)
    }
}

async function f(){
   
    let result = await new Thenable(2);
    console.log(result);
}
f();
