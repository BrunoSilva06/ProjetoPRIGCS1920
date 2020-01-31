var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  if(req.isAuthenticated()){
    res.redirect('/posts');;
  }
  else{
    res.render('index', { title: 'Express' , isAuthenticated: req.isAuthenticated() });
  }
})

router.get('/images/:ficheiro', function(req, res){
  var dir = __dirname + '/../data/profiles/' + req.params.ficheiro;
  res.sendFile(path.resolve(dir)); 
})

router.get('/register', function(req, res) {
  res.render('register', { title: 'Registo' , isAuthenticated: false });
});

router.get('/post', function(req, res) {
  if(req.isAuthenticated()){
    res.render('post-form', { title: 'Registo', isAuthenticated: req.isAuthenticated()});
  }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});

router.post('/login', passport.authenticate('local',
  {
  successRedirect: '/posts',
  successFlash: 'Utilizador autenticado com sucesso!',
  failureRedirect: '/error',
  failureFlash: 'Utilizador ou password inválido(s)...'
  }
));

router.get('/logout', function(req, res) {
  req.session.destroy(function (err) {
    res.redirect('/'); 
  });
});

router.get('/editar/:idUser', function(req, res) {
  res.render('user-update', { title: 'Editar' , isAuthenticated: true});
});

module.exports = router;
