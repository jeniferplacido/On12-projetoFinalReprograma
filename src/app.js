const express = require("express");
const cors = require ('cors')
const db = require ('./data/database')
const app = express();
const poderosas = require("./routes/candidatas.routes");

db.connect();
app.use(express.json());

app.use(cors());
app.use("/poderosas", poderosas);


module.exports = app;