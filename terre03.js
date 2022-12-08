let lettreDepart = "n";

function afficheAlphabet (){
  
  let indexLettreDepart = lettreDepart.charCodeAt();
  let afficherLettre = "";

  for(let i = indexLettreDepart; i<=122; i++){
    
    afficherLettre = String.fromCharCode(i);
    
    console.log(afficherLettre);
  }
}

afficheAlphabet(lettreDepart);