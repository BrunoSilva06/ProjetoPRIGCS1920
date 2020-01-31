const express = require('express');
const router = express.Router();

var Alunos = require('../controllers/alunos')

/* GET: lista de alunos */
router.get('/alunos', function(req, res) {
    Alunos.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

/* GET: recupera a informação de um aluno */
router.get('/alunos/:idAluno', function(req, res) {
  Alunos.consultar(req.params.idAluno)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

// POST: inserir um aluno
router.post('/alunos', function(req,res){
  Alunos.inserir(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router