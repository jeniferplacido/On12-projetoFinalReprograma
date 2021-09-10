const express = require("express");
const cors = require ('cors')
const db = require ('./data/database')
const app = express();
const candidatas = require("./routes/candidatas.routes");
db.connect();
app.use(express.json());

app.use(cors());
app.use("/candidatas", candidatas);


module.exports = app;