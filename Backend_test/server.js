const express =require("express")
const app=express();
const port=3000

const clientRouter=require('./routes/ClientRoute')
require ('./config/database');

app.use(express.json());
app.use('/clients',clientRouter)


app.listen(port, () => {
    console.log(`le serveur démarre sur le port : ${port}`);
});
