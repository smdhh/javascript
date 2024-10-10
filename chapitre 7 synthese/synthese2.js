listecourse =["baNane", "Fraise", "Chocolat" , "laIt" , "Poulet"]



let saisie = prompt("Saisir le nom d el'element à supprimer: ")

function supprimer(tableau, choix) {
    if(tableau.includes(choix)){
        let index = tableau.indexOf(choix)
        console.log("La marque " +choix+ " est bien disponible ")
        tableau.splice(index, 1);
        console.log("Le nouveau tableau est : " +tableau)

}}


supprimer(listecourse,saisie)

// let continuer = ""

// while (continuer == ""){

//     choixUtilisateur =  prompt("  Veuillez choisir parmis ses actions :  \n\n 1 : Ajouter un élément à la liste de courses. \n 2 : Retirer un élément de la liste de courses. \n 3 : Afficher les éléments de la liste de courses. \n 4 : Vider la liste de courses. \n 5 : Quitter le programme")

//     if (parseInt(choixUtilisateur) >= 0 && parseInt(choixUtilisateur) <5 ){
//         if(choixUtilisateur=="1" ){
//             let ajouter = prompt("Quel élement voulez vous ajouter à votre liste ?  \n " + listecourse)
//             listecourse.push(ajouter)
//             alert( "Vous avez ajouté un élement à la liste !! \n Nouvelle liste :  " +  ajouter +"\n"+listecourse)

        
//         } else if  (parseInt(choixUtilisateur) == "2") {

//             let choix = prompt ("Quel élément voulez vous retirer de la liste ? "+ listecourse)
//             let toDelete = listecourse.shift(choix.toLowerCase())
//             console.log(" Vous avez retiré un élément de la liste :/ \n Nouvelle liste : " + listecourse)

//     }
    

// } 
    
// }



// switch  (choixUtilisateur)
// {
//     case 1 :
//         ajouter = prompt (" Quel élement voulez vous ajouter à votre liste ?  \n " + listecourse)
//         listecourse.push(ajouter)
//             alert( "Vous avez ajouté un élement à la liste !! \n Nouvelle liste :  " + listecourse)
//         break;
//     case 2 :
//         retirer  = parseInt (prompt (" Quel élément voulez vous retirer de la liste ? "+ listecourse ))
//             alert( " Vous avez retiré un élément de la liste :/ \n Nouvelle liste : " + listecourse )
//         break;
//     case 3 :
//         afficher = parseInt (prompt (" Affichez la liste : "))
//         alert (listecourse)
//         break;
//     case 4 : 
//         vider = parseInt (prompt (" Vider la liste : "))
//         break;
//     case 5 :
//         Quitter = parseInt (prompt (" Quitter ")) 
//         break;
//     default : 
//         alert(" Choix invalide. Veuillez relancer le programme ! ")
    
// }

    
