function nomFichier(){
    let nomDuFichier = module.filename;
    return nomDuFichier.split('/').pop();
    
  };
  
  console.log(nomFichier());