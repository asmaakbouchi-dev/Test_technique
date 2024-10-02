const express =require("express")
const app=express();
const port=3000

const clientRouter=require('./routes/ClientRoute') // importer routes
const Erreur404 =require('./middlewares/errorMiddleware') // importer ficheer de gestion d'erreur
require ('./config/database'); //importer la base de données

app.use(express.json());
app.use('/clients',clientRouter)

//indique d'erreur 404
app.use(Erreur404);

//Démarrer le serveur
app.listen(port, () => {
    console.log(`le serveur démarre sur le port : ${port}`);
});
