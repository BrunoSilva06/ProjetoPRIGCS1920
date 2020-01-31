var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs')
var User = require('../models/user')
var axios = require('axios')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var bcrypt = require('bcryptjs')
const antlr4 = require('antlr4/index');
const GeekParser = require('../public/grammar/GeekbookParser.js');
const GeekLexer = require('../public/grammar/GeekbookLexer.js');
var GeekbookVisitor = require('../public/grammar/GeekbookVisitor.js').GeekbookVisitor;
var Visitor = require('../public/grammar/Visitor.js');
var User = require('../models/user')


var api = 'http://localhost:3001/'

router.post('/', upload.array('profile'), function(req,res){
    var file, oldPath, newPath;
    var data;
    var photo;
    
    
    for(var i = 0; i < req.files.length;i++){
      file = req.files[i];
      oldPath = __dirname + '/../' + file.path
      newPath = __dirname + '/../data/profiles/' + file.originalname
      console.log(file.originalname);
      
      fs.rename(oldPath, newPath, function (err) {
          if (err) throw err
      })
    }
    if (i == 2) photo = req.files[1].originalname;
    else photo = 'nophoto.png';

    var input = fs.readFileSync(req.files[0].path).toString();
    var chars = new antlr4.InputStream(input);
    var lexer = new GeekLexer.GeekbookLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new GeekParser.GeekbookParser(tokens);
    var tree = parser.profile();
    

    var visitor = new Visitor();
    
    var user = tree.accept(visitor);
    console.log(user);

    data = new Date();

    var novoUser = new User({ 
      nome: user[0],
      _id: user[1],
      email: user[2], 
      password: bcrypt.hashSync(user[3], 10),
      curso: user[4],
      homepage: user[5],
      cv: user[6], 
      bio: user[7],
      photo: photo,
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

module.exports = router;