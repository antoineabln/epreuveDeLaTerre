let tab = [11,40,34];

function milieu(){
  
  if(tab[0] <tab[1] && tab[1]<tab[2]){
    
    return tab[1];
    
  }else if(tab[1] <tab[0] && tab[0]<tab[2]){
    
    return tab[0];
    
  }
  
  else if(tab[1] == tab[0] && tab[0]== tab[2]){
    
    return "erreur";}
    
  else{
    
    return tab[2];
    
  }
}

console.log(milieu(tab));