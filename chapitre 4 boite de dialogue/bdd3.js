

let poids = parseInt(prompt("Veuillez entrer votre poids (kg) :","78"))
let taille = parseInt(prompt(" veuillez entrer votre taille (cm) :","178"))/100

function calculerIMC() {
   
    return poids / taille ** 2

}

alert("Votre imc est de : " + calculerIMC().toFixed(2))


