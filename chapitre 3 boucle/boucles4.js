let resultat=0

function somme(n) {
    for (let i=1; i<=n; i++){
    
        resultat += i
        
    }
    return resultat;
}
let n = 10;
console.log("la somme des nombres de 1 à "+ n + " est : "+ somme(n));