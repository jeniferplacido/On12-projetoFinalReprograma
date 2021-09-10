const mongoose = require('mongoose');
const poderosasSchema = require('../models/poderosasSchema')

const getAll = async (req, res) => {
    const poderosas = await poderosasSchema.find().populate('Poderosas')
    res.status(200).json(poderosas)
};

const createPoderosa = async (req, res) => {

  const poderosas = new poderosasSchema({

    _id: mongoose.Schema.Types.ObjectId(), 
  nome_completo: {type: String, required: true},
  o_que_eu_quero: {type: String, required: true},
  cidade_estado: {type: String, required: true},
  linkedin: {type: String, required: true},
  github: {type: String, required: true},
  email: {type: String, required: true}
  })
  try {
    const newPoderosa = await poderosas.save()
    res.status(201).json(newPoderosa)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
};

const getById = async (req, res) => {
  try {
      const poderosas = await poderosasSchema.findById(req.params.id)
      if(poderosas == null) {
          return res.status(404).json({message: 'Opa, Essa poderosa ainda não foi cadastrada.'})
      }
      res.json(poderosas)
  } catch (err) {
      res.status(500).json({ message: err.message })

  }
};

const updatePoderosas = async (req, res) => {
  try {
      const poderosas = await poderosasSchema.findById(req.params.id)
      if(poderosas == null) {
          return res.status(404).json({message: 'Opa, essa poderosa ainda não foi cadastrada.'})
      }
      
      if (req.body.nome_completo != null) {
          poderosas.nome_completo = req.body.nome_completo
      }
      if (req.body.cidade_estado != null) {
          poderosas.cidade_estado = req.body.cidade_estado
      }
      if (req.body.github != null) {
          poderosas.github = req.body.github
      }
      if (req.body.email != null) {
          poderosas.email = req.body.email
      }
      
      const atualizaPoderosa = await poderosas.save()
      res.json(atualizaPoderosa)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
};

const deletePoderosa = async (req, res) => {
  try{
    const poderosas = await poderosasSchema.findById(req.params.id)
    if(poderosas == null){
      return res.status(404).json({message: 'Opa, essa poderosa não foi encontrada.'})
    }

    await poderosas.remove()
    res.status(200).json({message: 'Cadastro removido com sucesso!'})

  } catch(err){
    res.status(500).json({message:err.message})
  }
};

module.exports = {
    getAll,
    createPoderosa,
    getById,
    updatePoderosas,
    deletePoderosa
}