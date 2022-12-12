let nb1 = 10;
let nb2 = 5;

function division(){
  
 if(nb1 < nb2 || nb1 == 0 || nb2 ==0){
   
   console.log("erreur");
   
 } else{
   
   console.log("résultat : " + nb1/nb2);
   console.log("reste : " + nb1%nb2);
 }
}

division(nb1,nb2);
