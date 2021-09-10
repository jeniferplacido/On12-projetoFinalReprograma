const mongoose = require('mongoose');
const Poderosas = require('../models/poderosasSchema')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const getAll = async (req, res) => {
  const mulheres = await Poderosas.find() 
    res.status(200).json(mulheres)
}


const createPoderosa = async (req, res) => {
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1]
  if(authHeader == undefined){
    return res.status(403).send({message: "Por gentileza informar autorização"})
  }
  jwt.verify(token, SECRET, async (err) => {
    if(err){
      res.status(403).send({message: "token inválido", err})
    }
    const poderosa = await Poderosas.find()
  })

  const poderosas = new Poderosas({

    _id: new mongoose.Types.ObjectId(), 
  nome_completo: req.body.nome_completo,
  o_que_eu_quero: req.body.o_que_eu_quero,
  cidade_estado: req.body.cidade_estado,
  linkedin: req.body.linkedin,
  github: req.body.github,
  email: req.body.email
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
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1]

  if(!token){
    return res.status(403).send({message: "Por gentileza informar autorização"})
  }

  jwt.verify(token, SECRET, async (err)=> {

    if(err){
      res.status(403).send({message: "Token inválido"})
    }

    const poderosa = await Poderosas.find()
      res.json(poderosa)
  })

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