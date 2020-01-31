var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//Módulos de suporte à autenticação
var uuid = require('uuid/v4');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var axios = require('axios');
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var api = 'http://localhost:3001/'
//Configuração da estratégia local


passport.use(new localStrategy(
  {usernameField: 'email',passwordField: 'password'}, (email,password,done) =>{
    var token = jwt.sign({ user: 'coidj'}, "geekbook", 
    {
        expiresIn: 3000,
        issuer: "Servidor GeekBook"
    })
    axios.get(api+ 'users?email=' + email + '&token=' + token)
      .then(dados => { 
        const user = dados.data
        if(!user) { return done(null,false,{message: 'Credenciais Inválidas: Utilizador Inexistentes\n'})}
        if(!bcrypt.compareSync(password, user.password)) {  return done(null, false, {message: 'Credenciais Inválidas: Password Inválida\n'})}
        return done(null,user)
      })
      .catch(erro => done(erro))
  
    }))


passport.serializeUser((user,done) =>{
  console.log('Vou serializar o utilizador: ' + JSON.stringify(user))
  //app.locals.user = JSON.stringify(user);
  done(null, user.email)
})

passport.deserializeUser((email,done) =>{
  var token = jwt.sign({}, "geekbook", 
  {
      expiresIn: 3000, 
      issuer: "Servidor GeekBook"
  })
  console.log('Vou desserializar o utilizador: ' + email)
  
  axios.get(api + 'users?email=' + email+ '&token=' + token)
    .then (dados => {app.locals.user = dados.data; done(null, dados.data)})
    .catch(erro => done(erro,false))
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var gcsRouter = require('./routes/gcs');
var messagesRouter = require('./routes/messages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  genid: (req) =>{
    console.log('Dentro do middleware da sessão...')
    console.log(req.sessionID)
    return uuid()
    },
    store: new FileStore(),
    secret: 'O meu segredo',
    resave: false,
    saveUninitialized: true
})
)




app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.use(function(req, res, next)
{
    
    if(req.isAuthenticated())
    {
      var user = app.locals.user;
      var adminrole;
      if(user._id == 'admin'){
        adminrole = true;
      }
      else adminrole = false;

      var token = jwt.sign({username: user._id, admin: adminrole},"geekbook", 
      {
        expiresIn: 3000,
        issuer: "Servidor GeekBook"
      })
      
      app.locals.token = token;
    }

    next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/messages', messagesRouter);
app.use('/gcs', gcsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;