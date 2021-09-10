const mongoose = require('mongoose');

const podeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  nome_completo: {type: String, required: true},
  o_que_eu_quero: {type: String, required: true},
  cidade_estado: {type: String, required: true},
  linkedin: {type: String, required: true},
  github: {type: String, required: true},
  email: {type: String, required: true}
});

module.exports = mongoose.model('poderosas', podeSchema)