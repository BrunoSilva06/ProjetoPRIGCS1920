var express = require('express');
var router = express.Router();
var Message = require('../models/message')
var axios = require('axios')

var api = 'http://localhost:3001/'

router.post('/:id', function(req, res) {

    data = new Date()
    console.log('ESTOU AQUI');
    console.log(req.body)

    var novaMsg = new Message({ 
        receiver: req.params.id,
        text: req.body.text,
        type: 'text', 
        seen: false,
        date: data.toISOString(),
        sender: {id: req.app.locals.user._id, name: req.app.locals.user.nome, photo: req.app.locals.user.photo}
    });
    
    console.log(novaMsg)
    
    axios.post(api +'messages/'+ req.params.id,novaMsg)
    .then(dados =>{
        res.redirect(req.get('referer'));
      })
      .catch(erro =>{
        res.render('error', {error:erro})
      })
});

router.post('/invite/:id', function(req, res) {

  data = new Date()

  console.log(req.body)

  var novaMsg = new Message({ 
      receiver: req.params.id,
      text: req.body.text,
      type: 'invite', 
      seen: false,
      date: data.toISOString(),
      sender: {id: req.app.locals.user._id, name: req.app.locals.user.nome, photo: req.app.locals.user.photo}
  });
  
  console.log(novaMsg)
  
  axios.post(api +'messages/'+ req.params.id,novaMsg)
  .then(dados =>{
      res.redirect(req.get('referer'));
    })
    .catch(erro =>{
      res.render('error', {error:erro})
    })
});

router.get('/:id', function(req, res) {
  if(req.isAuthenticated()){
      axios.get(api+'messages/'+ req.params.id+'?token='+req.app.locals.token)
      .then(dados =>{ res.render('lista-mensagens', { messages: dados.data, isAuthenticated: req.isAuthenticated()}); })
      .catch(erro => res.status(500).jsonp(erro))
    }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});

router.get('/requests/:id', function(req, res) {
  if(req.isAuthenticated()){
      axios.get(api+'messages/'+ req.params.id+'?token='+req.app.locals.token)
      .then(dados =>{ res.render('lista-requests', { messages: dados.data, isAuthenticated: req.isAuthenticated()}); })
      .catch(erro => res.status(500).jsonp(erro))
    }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});

router.post('/apagar/:id', function(req, res) {
  if(req.isAuthenticated()){
      axios.delete(api+'messages/'+ req.params.id)
      .then(dados =>{ res.redirect(req.get('referer')); })
      .catch(erro => res.status(500).jsonp(erro))
    }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});



module.exports = router;