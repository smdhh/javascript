const promesse = new Promise((resolve,reject)=>{
    setTimeout(()=>{const aleatoire = Math.trunc((Math.random()*10)+1);
        if(aleatoire<=5)resolve("entre 5 et 1")
        else reject ("Superieur à 5 !")

    },2000)

})

.then((text)=>{console.log(text)})
.catch((text)=>{console.error(text)})
console.log(promesse)