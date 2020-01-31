var express = require('express');
var Users = require('../controllers/users')
var Posts = require('../controllers/posts')
var passport = require('passport')
var router = express.Router();


/**
 * @api {get} /users Listagem de Utilizadores
 *  *@apiGroup User
 */
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  if(req.query.email){
    Users.consultarEmail(req.query.email)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else{Users.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

});


/**
 * @api {post} /users Criar Utilizador
 *  *@apiGroup User
 */
router.post('/', function(req, res) {
  Users.inserir(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});


/**
 * @api {get} /users/name/:nome Pesquisar Utilizador por nome
 *  *@apiGroup User
 */
router.get('/name/:nome', function(req, res) {
  Users.consultaNome(req.params.nome)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})

/**
 * @api {get} /users/:id Obter Utilizador
 *  *@apiGroup User
 */
router.get('/:id', function(req, res) {
  Users.consultar(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {get} /users/:id/feed Obter lista de posts personalizada de um User
 *  *@apiGroup User
 */
router.get('/:id/feed', passport.authenticate('jwt', {session: false}), async function(req, res) {
  var user = await Users.consultar(req.params.id);
    Posts.consultarFeed(user)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))

});

/**
 * @api {get} /users/:id/amigos Obter lista de amigos de um utilizador
 *  *@apiGroup User
 */
router.get('/:id/amigos', passport.authenticate('jwt', {session: false}),async function(req, res) {
  var user = await Users.consultar(req.params.id);
  Users.listaAmigos(user.friends)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {delete} /users/:id Apagar Utilizador
 *  *@apiGroup User
 */
router.delete('/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
  if(req.user.admin){
    Users.apagar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else res.status(500).jsonp('Não pode realizar esta operação');
});

/**
 * @api {post} /users/:id/message Enviar mensagem a um utilizador
 *  *@apiGroup User
 */
router.post('/:id/message', passport.authenticate('jwt', {session: false}), function(req, res) {
  Users.message(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {get} /users/:id/inbox Mensagens do utilizador
 *  *@apiGroup User
 */
router.get('/:id/inbox', passport.authenticate('jwt', {session: false}),function(req, res) {
  if(req.user.id == req.params.id){
    Users.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else res.status(500).jsonp('Não pode realizar esta operação');
});

/**
 * @api {post} /users/:id/amigos/:id2 Criar amizade entre dois users
 *  *@apiGroup User
 */
router.post('/:id/amigos/:id2', async function(req, res) {
  Users.addFriend(req.params.id, req.params.id2)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});


module.exports = router;
