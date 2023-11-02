const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")

// these alll routes are protected as these are user data 

const getContacts =asyncHandler(async (req, res) => {
    const contacts=await Contact.find({user_id:req.user.id})
  res.status(200).json(contacts);
});

const createNewContact =asyncHandler(async(req, res) => {
  console.log(req.body);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact=await Contact.create({

    name,
    email,
     phone,
     user_id:req.user.id
  })

  res.status(201).json(contact);
});

const getContact =asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
  res.status(200).json(contact);
});

const updateContact =asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},
    )
  res.status(201).json(updatedContact);
});

const deleteContact = asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne()
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createNewContact,
  getContact,
  updateContact,
  deleteContact,
};
