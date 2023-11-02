const express=require("express")
const {getContact,createNewContact,updateContact,deleteContact,getContacts}=require("../controllers/contactController.js")
const validateToken = require("../middleware/validateToken.js")
const router=express.Router()

router.use(validateToken)


router.get("/",getContacts)

// for individual contacts 
router.get("/:id",getContact)

router.post("/",createNewContact)

router.put("/:id",updateContact)

router.delete("/:id",deleteContact)

module.exports=router