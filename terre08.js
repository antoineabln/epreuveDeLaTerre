let nbr = 2;

let exp = 10;

function puissance(){
  
   let result = 1; 
  
  if(exp < 0){
    
    console.log("erreur");
  }
  else{
  
  for(let i = 0; i<exp; i++){
    
    result = result * nbr;
    
  }
  console.log(result);
}
}

puissance(nbr, exp);