
const objet = {
    prenom: "sami",
    age: 19,
    profession: "etudiant",
    pays: "France"
};
for (let key in objet) {

        console.log(` ${key} : ${objet[key]}`);
    }

