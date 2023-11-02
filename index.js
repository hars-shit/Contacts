const express=require("express");
const errorHandler = require("./middleware/error.js");
const connect = require("./config/db.js");
const dotenv=require('dotenv').config();
const app=express();

app.use(express.json());
app.use(errorHandler)
connect();
const port=process.env.PORT || 1000 ;


app.use("/api/contacts",require("./routes/contact.js"));
app.use("/api/users",require("./routes/user.js"))

app.listen(port,()=>{
    console.log(`Server running in ${port}`)
})

 