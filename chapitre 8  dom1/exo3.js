let maliste = document.getElementById("maliste")

let mesElement = ["Coder","manger","dormir"]
console.log(maliste)

for (element of mesElement){

    let nouveauLi = document.createElement("li")

nouveauLi.textContent = element

maliste.appendChild(nouveauLi)


}

