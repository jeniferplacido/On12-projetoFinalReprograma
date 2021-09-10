require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/reprograma-conexao'
;

const connect = () => {
    mongoose.connect(MONGO_URL, {
        useMongoClient: true
    })
    .then(()=>{
        console.log("Poderosas no MongoDb")
    })
    .catch((err)=>{
        console.log("Não está rodando!")
        console.error(err)
    })
}

module.exports = { connect }