
user = {nom:"Sami", age : 17}

function VerifUtilisateur(Utilisateur){

    return new Promise((resolve,reject)=>{
            if(Utilisateur.age>=18)resolve("Utilisateur majeur")
            else reject (" Utilisateur mineur !")
    
        })

  
 
        .then((text)=>{console.log(text)})
        .catch((text)=>{console.error(text)})
    }


VerifUtilisateur(user)


