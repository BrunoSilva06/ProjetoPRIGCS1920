var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs')
var User = require('../models/user')
var axios = require('axios')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var bcrypt = require('bcryptjs')

var api = 'http://localhost:3001/'
/* GET users listing. */
router.get('/', function(req, res) {
  if(req.isAuthenticated()){
    if(req.query.nome){
      axios.get(api +'users/name/'+ req.query.nome)
      .then(dados =>{ res.render('lista-search', { friends: dados.data, isAuthenticated: req.isAuthenticated()}); })
      .catch(erro =>{ res.render('error', {error:erro})
      })
    }
    else{
      axios.get(api+'users'+'?token='+req.app.locals.token)
      .then(dados =>{ res.render('lista-users-admin', { users: dados.data, isAuthenticated: req.isAuthenticated()}); })
      .catch(erro => res.status(500).jsonp(erro))
    }
  }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});

router.get('/:id', function(req, res) {
  var friend = checkFriend(req.app.locals.user,req.params.id); //Variável para saber se o user é amigo ou nao
  if(req.isAuthenticated()){
    axios.all([
      axios.get(api+'users/'+req.params.id+'?token='+req.app.locals.token),
      axios.get(api+'posts/user/'+req.params.id+'?friends='+friend+'?token='+req.app.locals.token)
    ])
    .then(axios.spread((userRes, postsRes) => {
      res.render('single-user', { profile: userRes.data, posts: postsRes.data, isAuthenticated: req.isAuthenticated(), isFriend: checkFriend(req.app.locals.user,req.params.id)});
    }))
  }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});

router.get('/images/:ficheiro', function(req, res){
  var dir = __dirname + '/../data/profiles/' + req.params.ficheiro;
  res.sendFile(path.resolve(dir));
})

router.post('/', upload.single('photo'), function(req,res){
  var oldPath;
  var newPath;
  var data;
  
  var file = req.file;
  var body = req.body;
  
  var hash = bcrypt.hashSync(req.body.password, 10)

  oldPath = __dirname + '/../' + file.path
  newPath = __dirname + '/../data/profiles/' + file.originalname
  
  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err
  })
  

  data = new Date()

  var novoUser = new User({ 
    _id: body.numero,
    nome: body.nome,
    password: hash,
    curso: body.curso, 
    bio: body.bio,
    email: body.email, 
    photo: file.originalname,
    homepage: body.homepage,
    cv: body.cv,
    registo: data.toISOString()
  });
  
  axios.post(api+'users', novoUser)
  .then(dados =>{
    res.redirect('/');
  })
  .catch(erro =>{
    res.render('error', {error:erro})
  })

})

router.get('/apagar/:idUser', function(req, res) {
  axios.delete(api +'users/'+ req.params.idUser+'?token='+req.app.locals.token)
  .then(dados =>{
    res.redirect('/users');
  })
  .catch(erro =>{
    res.render('error', {error:erro})
})
});

router.get('/:id/amigos', function(req, res) {
  console.log(req.app.locals.user.friends)
  if(req.isAuthenticated()){
    axios.get(api+'users/'+req.params.id+'/amigos'+'?token='+req.app.locals.token,req.app.locals.user.friends)
    .then(dados=> res.render('lista-amigos', { friends: dados.data, isAuthenticated: req.isAuthenticated()}))
    .catch(erro => res.render('error', {error:erro}))
  }
else{
  res.render('error', {message:'Utilizador não autenticado'})
}

});

router.post('/:id/amigos/:id2', function(req, res) {
  axios.post(api +'users/' + req.params.id + '/amigos/' + req.params.id2)
    .then(dados => res.redirect(req.get('referer')))
    .catch(erro => res.render('error', {error:erro}))
});

router.get('/editar/:idUser', function(req, res) {
  res.render('user-update', { title: 'Editar' , isAuthenticated: true});
});


function checkFriend(user, id) {
  console.log(id)
  for (var i=0; i<user.friends.length; i++) { 
    if (user.friends[i]._id === id ) {
            console.log('true')
            return true;
     }
  }
  console.log('false')
  return false;
}

module.exports = router;
