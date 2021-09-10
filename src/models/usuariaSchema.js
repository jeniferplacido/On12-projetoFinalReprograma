const mongoose = require('mongoose');

const usuariaSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('usuarias', usuariaSchema);
