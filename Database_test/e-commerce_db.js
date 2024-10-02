const mongoose=require("mongoose");
URL_db ="mongodb://localhost:27017/e-commerce_db"
mongoose.connect(URL_db)
.then(()=>console.log("Connecté avec succés"))
.catch((error)=>console.log(error))
