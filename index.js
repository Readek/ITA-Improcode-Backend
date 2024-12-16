require('dotenv').config();
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const libraryRoute = require("./routes/library.route.js")
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors({ origin: true, credentials: true }))

// routes
app.use("/api/libraries", libraryRoute);
app.get("/", (req, res) => {res.send("Eyo")});

mongoose.connect(process.env.MONGODB)
.then(() => {
    app.listen(1111, () => {
        console.log("Listening");
    })
}).catch(() => {
    console.log("Oh no.");
})