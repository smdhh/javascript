let nbEtudiant = 2
let NOMBRENOTE = 2
let etudiants = [];
let tabnote = [];
let tabMoyenne = []
sommeGenerale += moyenne; 




for (let i = 1; i <= nbEtudiant; i++) 
    {
    
    for (let n = 1; n <= NOMBRENOTE; n++) {
        let noteEtudiant = parseInt (prompt(" Veuillez entrer la note " + n + " de l'étudiant n° " + i))
     
        tabnote.push(noteEtudiant)
        console.log(tabnote)
    }
    etudiants.push(tabnote);

    tabMoyenne.push(calculerMoyenne(tabnote))

    tabnote = []
}

function calculerMoyenne(notes) {
    let somme = notes.reduce((acc, val) => acc + val, 0);
    return somme / notes.length;
}

function obtenirAppreciation(moyenne) {
    if (moyenne > 18) {
        return "Excellent";
    } else if (moyenne > 15) {
        return "Très bien";
    } else if (moyenne > 12) {
        return "Bien";
    } else {
        return "Peut mieux faire";
    }
}



for (let i = 0; i < etudiants.length; i++) {
    let moyenne = calculerMoyenne(etudiants[i]); 
    let appreciation = obtenirAppreciation(moyenne);
    alert(`Étudiant ${i + 1} - Moyenne: ${moyenne.toFixed(2)} - Appréciation: ${appreciation}`);

}
let moyenneGeneraleClasse = sommeGenerale / nbEtudiant;

alert(`Moyenne générale de la classe: ${moyenneGeneraleClasse}`);