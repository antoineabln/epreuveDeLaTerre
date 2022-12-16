let heure = "12:32PM";

function convertisseur(){
  
  let tabHeure = heure.split('');
  let h = parseInt(tabHeure.splice(0,2).join(''))+12 + "";
  let m = tabHeure.splice(0,3).join('');
  
  if(heure.split('').splice(0,2).join('') == "12" && heure.split('')[heure.split('').length-2] == "P"){
    
    console.log("00"+m);
    
  }
  
  else if(heure.split('')[heure.split('').length-2] == "P"){
  
    console.log(h+m);
        
  }else{
    
    console.log(heure.split('').splice(0,5).join(''));
  }
}

convertisseur(heure);