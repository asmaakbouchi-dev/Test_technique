const express =require("express")
const app=express();
const port=3000

require ('./config/database');

app.use(express.json());

app.listen(port, () => {
    console.log(`le serveur démarre sur le port : ${port}`);
});
