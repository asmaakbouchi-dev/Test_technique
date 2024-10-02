// Importer les modèles
const { SiNomad } = require('react-icons/si');
const { Client, Categorie, Produit, Commande, DetailCommande } = require('./e-commerce_db');
const { IoConstruct } = require('react-icons/io5');

// Insertion des données pour chaque entité
const ajouterClients = (data) => {
    Client.insertMany(data)
        .then((client) => console.log("Clients créés avec succès: ", client))
        .catch((error) => console.log("Erreur lors de la création des clients: ", error));
}

const ajouterCategories = (data) => {
    Categorie.insertMany(data)
        .then((categorie) => console.log("Catégories créées avec succès: ", categorie))
        .catch((error) => console.log("Erreur lors de la création des catégories: ", error));
}

const ajouterProduits = (data) => {
    Produit.insertMany(data)
        .then((produit) => console.log("Produits créés avec succès: ", produit))
        .catch((error) => console.log("Erreur lors de la création des produits: ", error));
}

const ajouterCommandes = (data) => {
    Commande.insertMany(data)
        .then((commande) => console.log("Commandes créées avec succès: ", commande))
        .catch((error) => console.log("Erreur lors de la création des commandes: ", error));
}

const ajouterDetailCommandes = (data) => {
    DetailCommande.insertMany(data)
        .then((detailCommande) => console.log("Détails des commandes créés avec succès: ", detailCommande))
        .catch((error) => console.log("Erreur lors de la création des détails des commandes: ", error));
}

// Récuperation des données 

const getAllClient=()=>{
Client.find().then((client)=>{
if (client) {console.log(client);}
else console.log("aucun client exist");
})
.catch((error)=> console.log("erreur d'affichage de client : ", error))
}

const getAllCategorie=()=>{
    Categorie.find().then((Categorie)=>{
    if (Categorie) {console.log(Categorie);}
    else console.log("aucun Categorie exist");
    })
    .catch((error)=> console.log("erreur d'affichage de Categorie : ", error))
    }
        
    

const getAllProduit=()=>{
    Produit.find().then((Produit)=>{
    if (Produit) {console.log(Produit);}
    else console.log("aucun Produit exist");
    })
    .catch((error)=> console.log("erreur d'affichage de Produit : ", error))
    }

const getAllCommande=()=>{
    Commande.find().then((Commande)=>{
    if (Commande) {console.log(Commande);}
    else console.log("aucun Commande exist");
    })
    .catch((error)=> console.log("erreur d'affichage de Commande : ", error))
    }


const getAllDetailCommande=()=>{
    DetailCommande.find().then((DetailCommande)=>{
    if (DetailCommande) {console.log(DetailCommande);}
    else console.log("aucun DetailCommande exist");
    })
    .catch((error)=> console.log("erreur d'affichage de DetailCommande : ", error))
    }   

const AfficherClient_Par_id=(id)=>{
    Client.findOne(id)
        .then((client) => {
        if (client) console.log(client);
        else console.log("Le client n'existe pas");
        })
        .catch((error) => console.log("erreur d'affichage de client : ", error));}

const AfficherClient_Par_Nom_email=(nom,email)=>{
    Client.findOne({$and:[{nom:nom},{email:email}]})
      .then((client) => {
        if (client) console.log(client);
        else console.log("Le client n'existe pas");
      })
      .catch((error) => console.log("erreur d'affichage de client : ", error));}


// =========== Test des fonctions d'insertion et recupératiob des données ===========

// Données pour les clients
const clients = [
    {
        nom: "Ahmed talal",
        email: "ahmed.ali@gmail.com",
        motdepasse: "azerty321",
        adresse: "123 Rue des Roses, Casablanca",
        telephone: "0612345678",
        ville: "Casablanca",
        pays: "Maroc"
    },
    {
        nom: "Fatima zahra",
        email: "fatima.zahra@gmail.com",
        motdepasse: "azerty321",
        adresse: "456 Rue des Palmiers, Rabat",
        telephone: "0712345678",
        ville: "Rabat",
        pays: "Maroc"
    },
    {
        nom: "Youssef Benani",
        email: "youssef.benani@gmail.com",
        motdepasse: "azerty321",
        adresse: "789 Rue des Papillons, Marrakech",
        telephone: "0812345678",
        ville: "Marrakech",
        pays: "Maroc"
    }
];

// Données pour les catégories
const categories = [
    { nom: "Électronique", description: "Appareils électroniques et gadgets" },
    { nom: "Maison", description: "Produits pour la maison et le jardin" }
];

// Données pour les produits
const produits = [
    {
        nom: "Télévision 4K",
        description: "Télévision haute définition",
        prix: 1200,
        stock: 50,
        image_url: "image.jpg",
        categorie_id: "66fd395ec7bdf9d97cafb8b8"  
    },
    {
        nom: "Chaise de jardin",
        description: "Chaise confortable pour le jardin",
        prix: 200,
        stock: 150,
        image_url: "image.jpg",
        categorie_id: "66fd395ec7bdf9d97cafb8b9"  // Remplacer par un ObjectId valide
    }
];

// Données pour les commandes
const commandes = [
    {
        id_client: "66fd353b92ac676e3a3cf271",  // Remplacer par un ObjectId valide
        date_commande: new Date(),
        statut: "En cours",
        total: 1400,
        adresse_livraison: "123 Rue des Roses, Casablanca",
        telephone_livraison: "0612345678",
        méthode_paiement: "Carte bancaire"
    },
    {
        id_client: "66fd353b92ac676e3a3cf270",  // Remplacer par un ObjectId valide
        date_commande: new Date(),
        statut: "Livré",
        total: 200,
        adresse_livraison: "456 Rue des Palmiers, Rabat",
        telephone_livraison: "0712345678",
        méthode_paiement: "Paypal"
    }
];

// Données pour les détails des commandes
const detailsCommandes = [
    {
        id_commande: "66fd3a58c037b6cb122f0ade",  
        id_produit: "66fd395ec7bdf9d97cafb8b8", 
        quantite: 1,
        prix_unitaire: 1200
    },
    {
        id_commande: "66fd3a58c037b6cb122f0adf", 
        id_produit: "66fd395ec7bdf9d97cafb8b9", 
        quantite: 2,
        prix_unitaire: 100
    }
];


// =========  Appel des fonctions d'insertion ===========

ajouterClients(clients);
//ajouterCategories(categories);
//ajouterProduits(produits);
//ajouterCommandes(commandes);
//ajouterDetailCommandes(detailsCommandes);

// =========  Appel des fonctions de recuperatio de donneés ===========
//getAllClient();
//getAllCategorie();
//getAllProduit();
//getAllCommande();
//getAllDetailCommande();
//AfficherClient_Par_id("66fd353b92ac676e3a3cf270")
//AfficherClient_Par_Nom_email("Ahmed talal","ahmed.ali@gmail.com")
