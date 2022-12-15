let nbr = 3;

function premier(){
  let c=0;
  
  for (let i = 2; i <= Math.sqrt(nbr); i++){

    if (nbr % i == 0){

        c++;
    }
  } 
  
  if(c!=0 || nbr<2){
    
    console.log(nbr +" n'est pas un nombre premier");
    
  }else{
    
    console.log(nbr +" est un nombre premier")
  }
 
}
   
premier(nbr);