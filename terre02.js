let argument1 = "Je";
let argument2 = "suis";
let argument3 = "solide !";

function afficheArgument(){

    let argument = "";

     for(let i = 0; i<arguments.length; i++){

        console.log(arguments[i]); 

     }
}

afficheArgument(argument1, argument2, argument3);