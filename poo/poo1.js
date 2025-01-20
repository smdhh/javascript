class Personne {
    constructor(nom, age){
    this.nom = nom;
    this.age = age;
}
    saluer(){
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
    }
    }
    const personne1 =  new Personne("Alice", 30);
    personne1.saluer();
    const personne2 =  new Personne("Sami", 19);
    personne2.saluer();