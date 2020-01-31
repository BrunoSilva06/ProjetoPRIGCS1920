var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs')
var Post = require('../models/post')
var Post = require('../models/post')
var axios = require('axios')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var dateFormat = require('dateformat')
var uuid = require('uuid/v4')
var jwt = require('jsonwebtoken');

var api = 'http://localhost:3001/'

router.get('/', function(req, res) {
  

  if(req.isAuthenticated()){
    if(req.app.locals.user._id == 'admin'){
      axios.get(api+'posts/'+'?token='+req.app.locals.token)
      .then(dados =>{ res.render('lista-posts-admin', { posts: dados.data, isAuthenticated: true}); })
      .catch(erro => res.status(500).jsonp(erro))
    }
    else{
      axios.get(api+'users/'+req.app.locals.user._id+'/feed?token='+req.app.locals.token)
      .then(dados =>{ res.render('lista-posts', { posts: dados.data, isAuthenticated: true}); })
      .catch(erro => res.status(500).jsonp(erro))
    }
  }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});

router.get('/curso/:curso', function(req, res) {
  if(req.isAuthenticated()){
    axios.get(api+'posts/curso/'+ req.params.curso+'?token='+req.app.locals.token)
    .then(dados =>{ res.render('lista-posts', { posts: dados.data, isAuthenticated: true}); })
    .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    res.render('error', {message:'Utilizador não autenticado'})
  }
});

router.get('/categoria/:categoria', function(req, res) {
    axios.get(api+'posts/categoria/'+ req.params.categoria+'?token='+req.app.locals.token)
    .then(dados =>{ res.render('lista-posts', { posts: dados.data, isAuthenticated: true}); })
    .catch(erro => res.status(500).jsonp(erro))
});


router.get('/:id', function(req, res) {
  axios.get(api+'posts/' + req.params.id+'?token='+req.app.locals.token)
  .then(dados =>{ res.render('single-post', { post: dados.data, isAuthenticated: true}); })
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:id/images/:ficheiro', function(req, res){
  var dir = __dirname + '/../data/posts/'+req.params.id+'/' + req.params.ficheiro;
  res.sendFile(path.resolve(dir));
})

router.post('/', upload.array('file'), function(req,res){
  var data;

  var file = req.file;
  var body = req.body;
  console.log(req.file);
  data = new Date()
  var ficheiros = [];

  console.log(ficheiros)
  var novoPost = new Post({ 
    text: body.text,
    type: body.type,
    category: body.category, 
    code: body.code, 
    visibility: body.visibilidade,
    likes: 0,
    files: [],
    date: dateFormat(data,"h:MM TT,dd-mm-yyyy"),
    author: {_id: body.author_id, name: body.author_name, photo: body.author_photo}
  });

  var filesdir = __dirname + '/../data/posts/'+novoPost._id+'/'
  fs.mkdirSync(filesdir);

  for(var i = 0; i < req.files.length;i++){
    file = req.files[i];
    oldPath = __dirname + '/../' + file.path
    newPath =  filesdir + file.originalname
    
    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
    })

  novoPost.files.push({ 
    name: file.originalname, size: file.size
  });
}

  console.log(novoPost)
  axios.post(api+'posts', novoPost)
  .then(dados =>{
    res.redirect('/posts');
  })
  .catch(erro =>{
    res.render('error', {error:erro})
  })

})

router.post('/:id/comment', function(req,res){
  var body = req.body
  console.log(body)
  data = new Date();
  var novoComment = {
    text: body.text,
    date: dateFormat(data,"h:MM TT,dd-mm-yyyy"),
    author: {id: req.app.locals.user._id, name: req.app.locals.user.nome, photo: req.app.locals.user.photo}
  }
  console.log(novoComment)

  axios.post(api+'posts/'+req.params.id+'/comment', novoComment)
  .then(dados =>{
    res.redirect(req.get('referer'));
  })
  .catch(erro =>{
    res.render('error', {error:erro})
  })

})

router.post('/:id/like', function(req,res){
  axios.post(api+'posts/'+req.params.id+'/like')
  .then(dados =>{
    res.redirect(req.get('referer'));
  })
  .catch(erro =>{
    res.render('error', {error:erro})
  })
})

router.get('/apagar/:idPost', function(req, res) {
  console.log(req.params.idPost);
  axios.delete(api +'posts/'+ req.params.idPost+'?token='+req.app.locals.token)
  .then(dados =>{
    res.redirect('/posts');
  })
  .catch(erro =>{
    res.render('error', {error:erro})
})
});


module.exports = router;