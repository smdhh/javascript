// Classe Afficheur
class Afficheur {
  constructor(id, nom, localite, message) {
      this.id = id;
      this.nom = nom;
      this.localite = localite;
      this.message = message;
  }

  afficherInfos() {
      return `Afficheur ${this.nom} (${this.id}) - Localité: ${this.localite}, Message: "${this.message}"`;
  }
}

// Classe Dashboard
class Dashboard {
  constructor() {
      this.afficheurs = new Map();
  }

  ajouterAfficheur(id, nom, localite, message) {
      if (this.afficheurs.has(id)) {
          console.log(`L'afficheur avec l'ID ${id} existe déjà.`);
          return;
      }
      const nouvelAfficheur = new Afficheur(id, nom, localite, message);
      this.afficheurs.set(id, nouvelAfficheur);
      this.afficherTousLesAfficheurs();
  }

  supprimerAfficheur(id) {
      if (this.afficheurs.has(id)) {
          this.afficheurs.delete(id);
          console.log(`Afficheur ID ${id} supprimé.`);
          this.afficherTousLesAfficheurs();
      }
  }

  mettreAJourMessage(id, newMessage) {
      if (this.afficheurs.has(id)) {
          this.afficheurs.get(id).message = newMessage;
          console.log(`Message mis à jour pour l'afficheur ID ${id}.`);
          this.afficherTousLesAfficheurs();
      }
  }

  afficherTousLesAfficheurs() {
      const afficheurListDiv = document.getElementById("afficheurList");
      afficheurListDiv.innerHTML = "";

      this.afficheurs.forEach((afficheur, id) => {
          const div = document.createElement("div");
          div.classList.add("afficheur");
          div.innerHTML = `
              <p>${afficheur.afficherInfos()}</p>
              <input type="text" id="updateMessage-${id}" placeholder="Nouveau message">
              <button onclick="mettreAJour(${id})">Mettre à jour</button>
              <button onclick="supprimer(${id})">Supprimer</button>
          `;
          afficheurListDiv.appendChild(div);
      });
  }
}

// Création d'une instance de Dashboard
const dashboard = new Dashboard();

// Fonction pour gérer la soumission du formulaire
document.getElementById("afficheurForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const id = parseInt(document.getElementById("id").value);
  const nom = document.getElementById("nom").value;
  const localite = document.getElementById("localite").value;
  const message = document.getElementById("message").value;

  dashboard.ajouterAfficheur(id, nom, localite, message);

  // Réinitialiser le formulaire
  this.reset();
});

// Fonction pour mettre à jour le message d'un afficheur
function mettreAJour(id) {
  const newMessage = document.getElementById(`updateMessage-${id}`).value;
  if (newMessage.trim() !== "") {
      dashboard.mettreAJourMessage(id, newMessage);
  }
}

// Fonction pour supprimer un afficheur
function supprimer(id) {
  dashboard.supprimerAfficheur(id);
}

// Tester le code avec les valeurs initiales
dashboard.ajouterAfficheur(1, "Afficheur 1", "Station A", "Message 1");
dashboard.ajouterAfficheur(2, "Afficheur 2", "Station B", "Message 2");