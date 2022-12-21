let tab = [3, 8, 9, 12];

function trie(){
  
  let x=0;
  let c=1;
  
  for(let i = 0; i<tab.length-1; i++){
    
    if(tab[i]-tab[c]>0){
      
      x++;
      c++;
    }
    else{
      c++;
    }
  }
  
  if(x == 0){
    console.log("trié !");
  }
  else{
    
    console.log(" Pas trié !")
  }
}

trie(tab);