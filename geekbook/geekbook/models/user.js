const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    nome: String,
    _id: String,
    password: String,
    bio: String,
    curso: String,
    cv: String,
    homepage: String,
    email: String,
    photo: String,
    registo: String,
    friends:[{ _id: String}]
})

module.exports = mongoose.model('user', userSchema)