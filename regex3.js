const mac = "0F:1B:44:11:3A:B7"
const regex=/^(([0-9]|[a-f]){2}\:){5}([0-9]|[a-f]){2}$/i
console.log(regex.test(mac))
if (regex.test(mac)) 
    {
    console.log("Adresse MAC valide : " + mac)
    }
else 
    {
    console.log("Adresse MAC invalide !!!!!!")
    }