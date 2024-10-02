const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Veuillez entrer une adresse email valide.']
    },
    motdepasse: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required:true
    },
    adresse: {
      type: String,
      required:true
    }
  },
  {
    timestamps: true,
  }
);

const clientModel = mongoose.model("Client",clientSchema);
module.exports = clientModel