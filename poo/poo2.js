class CompteBancaire {
    #solde;
    constructor(montantInitial){
        this.#solde = montantInitial ;
    }
    get solde(){
        return this.#solde;
    }
    set deposer(montant){
        if (montant > 0) {
            this.#solde +=montant; 
        } else {
            console.log ("Le montant déposé doit etre positif")
        }
    }
    set retirer (montant){
        if (montant > 0 && this.#solde >= montant ) {
            this.#solde -=montant;
        } else {
            console.log("Solde insuffisnt")
        }

    }
    
}
const compte = new CompteBancaire(100)
compte.retirer = 25;
console.log(compte.solde)