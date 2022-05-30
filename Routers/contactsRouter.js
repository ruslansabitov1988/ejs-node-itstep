const express = require("express");

const contactsRouter = express.Router();


contactsRouter.get ("/", (req,res) =>{
    res.render("contacts.ejs", {
        email:"rsabitov@gmail.com",
        contacts: "+7 775 2888188",
        addresses: ["Abay 24", "Kenesary 48", "Auezova 22", "Orybor 52"]
    });
})



module.exports = contactsRouter;