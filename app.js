require("dotenv").config()
const express = require("express")
const axios = require("axios")
const path = require("path")
const app = express()
const ejs = require("ejs")

const PORT = process.env.PORT

// middleware

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public"))) // using public assets


// requet to the home route
app.get("/", (req, res) => {
    res.render("home")
})





app.listen(PORT, ()=> console.log(`Application Running on Port ${PORT}`))