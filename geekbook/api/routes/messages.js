var express = require('express');
var Messages = require('../controllers/messages')
var router = express.Router();


/**
 * @api {post} /messages Criar Mensagem
 *  *@apiGroup Message
 */
router.post('/:id', function(req, res) {
    Messages.message(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {get} /messages/:id Obter Mensagem
 *  *@apiGroup Message
 */
router.get('/:id', function(req, res) {
    Messages.getMessages(req.params.id)
    .then( dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/**
 * @api {delete} /messages/:id Apagar Mensagem
 *  *@apiGroup Message
 */
router.delete('/:id', function(req, res) {
  Messages.apagar(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;