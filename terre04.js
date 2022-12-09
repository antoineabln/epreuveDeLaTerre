let nb = "oododod";

function pairImpair(){
  
  if(nb !== parseInt(nb)){
    
    console.log("Tu ne me la mettras pas à l’envers.");
  }
  
  else if(nb%2 == 0){
    
    console.log("nombre pair");
  }
  else{
    
    console.log("nombre impair");
  }
}


pairImpair(nb);