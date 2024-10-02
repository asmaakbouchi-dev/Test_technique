const express=require("express");
const router=express.Router();

const clientController=require("../controllers/ClientController")

router.post('/',clientController.createClient)
router.put('/:id',clientController.updateClient)
router.delete('/:id',clientController.deleteClient)
router.get('/:id',clientController.getClientById)
router.get('/',clientController.getAllClients)

module.exports=router