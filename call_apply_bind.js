//call(), apply(), es3
//bind() es5

//call(), apply() invokes fn immediately

//bind() -> returns a bound fn, can be executed later

// var pokemon = {
//     firstName:'Pika',
//     lastName:'Chu',
//     getPokeName: function(){
//         var fullName = this.firstName + " " + this.lastName;
//         return fullName; 
//     }
// };

// var pokemonName = function(snack, hobby){
//     console.log(this.getPokeName() + 'I choose you!!')
//     console.log(this.getPokeName()+ ' loves '+ snack+ ' and '+ hobby)
// };

// var logPokemon = pokemonName.bind(pokemon);
// logPokemon('sushi', 'painting');


var pokemon = {
    firstName:'Pika',
    lastName:'Chu',
    getPokeName: function(){
        var fullName = this.firstName + " " + this.lastName;
        return fullName; 
    }
};

var pokemonName = function(snack, hobby){
    // console.log(this.getPokeName() + 'I choose you!!')
    console.log(this.getPokeName()+ ' loves '+ snack+ ' and '+ hobby)
};

pokemonName.call(pokemon, 'sushi', 'painting');
pokemonName.apply(pokemon, ['sushi', 'painting']);

// 1. accept additional params as WEBGL_lose_context
// 2. executes right away
// 3. doent make a copy of the fn
