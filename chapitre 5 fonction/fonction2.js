function calculatrice(nb1,nb2, operation) {
    switch (operation) {
        case '+':
            return nb1 +nb2;
        case '-':
            return nb1 -nb2;
        case '*':
            return nb1 *nb2;
        case '**':
                return nb1 **nb2;
        case '/':
            if (nb2 !== 0) {
                return nb1 /nb2;
            } else {
                return 'Erreur : Division par zéro';
            }
        default:
            return 'Opération non valide';
    }
}
console.log(calculatrice(10, 5, '+'));  
console.log(calculatrice(10, 5, '-'));  
console.log(calculatrice(10, 5, '*'));  
console.log(calculatrice(10, 5, '/'));  
console.log(calculatrice(10, 0, '/')); 
console.log(calculatrice(10, 5, '**'));
