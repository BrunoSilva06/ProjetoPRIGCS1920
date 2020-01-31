var express = require('express');
var Posts = require('../controllers/posts')
var Users = require('../controllers/users')
var passport = require('passport')
var router = express.Router();


/**
 * @api {get} /posts Lista de Posts
 *@apiGroup Post
 */
router.get('/', passport.authenticate('jwt', {session: false}),function(req, res) {
    Posts.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {post} /Posts Inserir Post
 *  *@apiGroup Post
 */
router.post('/', function(req, res) {
    Posts.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {get} /posts/curso/:curso Filtrar Posts de um curso
 *  *@apiGroup Post
 */
router.get('/curso/:curso', passport.authenticate('jwt', {session: false}),function(req, res) {
  Posts.getCurso(req.params.curso)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {post} /posts/:id/comment Enviar Comentário
 *  *@apiGroup Post
 */
router.post('/:id/comment', function(req, res) {
    Posts.comentar(req.params.id,req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {post} /posts/:id/like Enviar like
 *  *@apiGroup Post
 */
router.post('/:id/like', function(req, res) {
  Posts.like(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {post} /posts/:id Obter post
 *  *@apiGroup Post
 */
router.get('/:id', passport.authenticate('jwt', {session: false}),function(req, res) {
    Posts.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});


/**
 * @api {get} /posts/user/:id Obter posts de um User
 *  *@apiGroup Post
 */
router.get('/user/:id', function(req, res) {

  if(req.query.friends == 'true'){
    Posts.consultarAmigo(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Posts.consultarUser(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  
});
/**
 * @api {get} /posts/categoria/:categoria Filtrar posts de uma dada categoria
 *  *@apiGroup Post
 */
router.get('/categoria/:categoria', passport.authenticate('jwt', {session: false}),function(req, res) {
  Posts.filtrarCategoria(req.params.categoria)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {delete} /posts/id Apagar um post
 *  *@apiGroup Post
 */
router.delete('/:id', passport.authenticate('jwt', {session: false}),function(req, res) {
  if(req.user.admin){
    Posts.apagar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else res.status(500).jsonp('Não pode realizar esta operação');
});


  
module.exports = router;
