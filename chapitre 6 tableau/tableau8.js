

var marque = ["apple", "samsung", "dell", "hp", "lg", "acer"];
console.log(marque)
let choix_marque =prompt("Quelle marque choisissez vous ? ")


if(marque.includes(choix_marque)){
    let index = marque.indexOf(choix_marque)
    console.log("La marque " +choix_marque+ " est bien disponible ")
    marque.splice(index, 1);
    console.log("Le nouveau tableau est : " +marque)

    } 
else
{
    console.log("la marque n'est pas disponible")
}
        

 