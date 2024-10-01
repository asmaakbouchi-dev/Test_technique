const mongoose = require('mongoose');
const mongodbURI ="mongodb://localhost:27017/gestion_clients"

mongoose.connect(mongodbURI)
    .then(() => console.log('Bien connecter avec MongoDb'))
    .catch(err => console.error('erreur de connexion avec MongoDB:', err));