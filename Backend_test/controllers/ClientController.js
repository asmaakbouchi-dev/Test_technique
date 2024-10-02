const bcrypt = require("bcrypt");
const clientModel = require("../models/ClientModel");

// Fonction d'ajout d'un client
const createClient = async (req, res) => {
    try {
      const { nom, prenom, email, motdepasse, telephone, adresse } = req.body;
  
      // Vérification des champs obligatoires
      if (!nom || !prenom || !email || !motdepasse || !telephone || !adresse) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
      }
    // Vérification du format de l'email avec une expression régulière
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Veuillez entrer une adresse email valide.' });
    }

      // Vérification si l'email existe déjà
      const existingClient = await clientModel.findOne({ email });
      if (existingClient) {
        return res.status(409).json({ message: 'Cet email existe déjà.' });
      }
  
      // Hashage du mot de passe
      const hashMotdepasse = await bcrypt.hash(motdepasse, 10);
  
      // Création du nouveau client
      const newClient = new clientModel({
        nom,
        prenom,
        email,
        motdepasse: hashMotdepasse,
        telephone,
        adresse
      });
  
      // Sauvegarde du client dans la base de données
      const savedClient = await newClient.save();
  
      // Réponse de succès avec le client créé
      return res.status(201).json({ message: 'Le client a été créé avec succès.', client: savedClient });
  
    } catch (error) {
      // Gestion des erreurs serveur
      console.error('Erreur lors de la création du client :', error);
      return res.status(500).json({ message: "Erreur interne du serveur." });
    }
  };
  
// Fonction de modification d'un client par id
  const updateClient = async (req, res) => {
      try {
        const { nom, prenom, email, motdepasse, telephone, adresse } = req.body;
        const id = req.params.id;
          const Client = await clientModel.findById(id);
          if (!Client) {
              return res.status(404).json({ message: `Client avec id ${id} n'exist pas` });
          }
        // Vérification du format de l'email avec une expression régulière
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Veuillez entrer une adresse email valide.' });
        }

        // Vérification si l'email existe déjà
        const existingClient = await clientModel.findOne({ email });
        if (existingClient) {
            return res.status(409).json({ message: 'Ce email existe déjà.' });
        }
          // Update Client information
          const newClientData = {
            nom,
            prenom,
            email,
            telephone,
            adresse
          };
          // If password is provided, hash the password
          if (motdepasse) {
              const hashedPassword = await bcrypt.hash(password, 10);
              newClientData.password = hashedPassword;
          }
          const updatedClient = await clientModel.findByIdAndUpdate(id, newClientData, { new: true });
          res.status(200).json({ message: "Le client modifier avec succée ", Client: updatedClient });
      }  catch (error) {
        // Gestion des erreurs serveur
        console.error('Erreur lors de la modification du client :', error);
        return res.status(500).json({ message: "Erreur interne du serveur." });
      }
  };
  
// Fonction de suppression d'un client par id
const deleteClient = async (req, res) => {
    try {
        const id = req.params.id;
        const client = await clientModel.findById(id);

        if (!client) {
            return res.status(404).json({ message: `Client avec id ${id} n'exist pas`});
        }
        const deletedClient=await clientModel.findByIdAndDelete(id)
        res.status(200).json({ message: "Le client supprimer avec succée", client : deletedClient});
    } catch (error) {
         // Gestion des erreurs serveur
         console.error('Erreur lors de la suppression du client :', error);
         return res.status(500).json({ message: "Erreur interne du serveur." });
    }
};

// Fonction de récuperation d'un client par id
const getClientById = async(req,res)=>{
    try
    {
        const id = req.params.id;
        const client = await clientModel.findById(id)
        if(!client ){
            res.status(404).json({message:`Client avec id ${id} n'exist pas`})
        }
        return res.status(200).json(client);
    }
    catch(error){
          // Gestion des erreurs serveur
          console.error('Erreur lors de la recherche du client :', error);
          return res.status(500).json({ message: "Erreur interne du serveur." });
    }
}

// Fonction de récuperation tous clients
const getAllClients = async (req, res) => {
    clients= await clientModel.find();
    try {
        if ( clients.length === 0) {
            return res.status(204).json([]);
        }
        return res.status(200).json(clients);
    } catch (error) {
        console.error('Erreur lors de la récupération des clients :', error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
    }
};

module.exports={createClient,updateClient,deleteClient,getClientById,getAllClients}
