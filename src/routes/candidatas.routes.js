const express = require('express');
const router = express.Router();
const controller = require('../controllers/candidatasControllers');

router.get('/candidatas', controller.getAll);
router.get('/:id', controller.getById);
router.post('/registrar', controller.createPoderosa);
router.patch('/atualizar/:id', controller.updatePoderosas);
router.delete('/delete/:id', controller.deletePoderosa);

//router.get('/Hello', (req, res)=>{
  //  res.status(200).send({'msg':'Deu tudo certo!'})
//});

module.exports = router