const mongoose = require("mongoose");

const URL_db = "mongodb://localhost:27017/e-commerce_db";
mongoose.connect(URL_db)
    .then(() => console.log("Connecté avec succès"))
    .catch((error) => console.log(error));

// Création de schémas de chaque entité
const clientSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motdepasse: { type: String, required: true },
    adresse: { type: String, required: true },
    telephone: { type: String, required: true },
    ville: { type: String },
    pays: { type: String }
});

const categorieSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String }
});

const productSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    stock: { type: Number, required: true },
    image_url: { type: String },
    categorie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",// clé étrangère vers l'entité Categorie
        required: true,
    }
});

const commandeSchema = new mongoose.Schema({
    id_client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client", // clé étrangère vers l'entité Client
        required: true,
    },
    date_commande: { type: Date, required: true },
    statut: { type: String, required: true },
    total: { type: Number, required: true },
    adresse_livraison: { type: String, required: true },
    telephone_livraison: { type: String },
    méthode_paiement: { type: String }
});

const detailCommandeSchema = new mongoose.Schema({
    id_commande: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Commande",  // clé étrangère vers l'entité  Commande
        required: true,
    },
    id_produit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produit", // clé étrangère vers Produit
        required: true,
    },
    quantit: { type: Number, required: true },
    prix_unitaire: { type: Number, required: true }
});

//exporter les modèles
const Client = mongoose.model("Client", clientSchema);
const Categorie = mongoose.model("Categorie", categorieSchema);
const Produit = mongoose.model("Produit", productSchema);
const Commande = mongoose.model("Commande", commandeSchema);
const DetailCommande = mongoose.model("DetailCommande", detailCommandeSchema);

module.exports = {
    Client,
    Categorie,
    Produit,
    Commande,
    DetailCommande
};
