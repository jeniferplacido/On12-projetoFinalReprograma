const express = require("express");
const cors = require ('cors')
const db = require ('./data/database')
const app = express();
const poderosas = require("./routes/candidatas.routes")
const usuaria = require('../src/routes/usuaria.routes')

db.connect();
app.use(express.json());

app.use(cors());
app.use("/poderosas", poderosas);
app.use("/usuaria", usuaria)

module.exports = app;