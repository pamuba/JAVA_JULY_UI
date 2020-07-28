//Closure means that the inner fn always has access
// to the vars and parameters of its outer function
//even after the outer  function has returned

function outerFunction(a){
    var outer = 1;

    function innerFunction(){
        console.log(outer)
        console.log(a)
    }
    return innerFunction;
}

var inner = outerFunction(100);
inner();

var fn = function(){console.log("Hii")}
fn();
