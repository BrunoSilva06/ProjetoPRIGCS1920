const mongoose = require('mongoose')

var messageSchema = new mongoose.Schema({
    receiver: String,
    text: String,
    type: String,
    seen: Boolean,
    date: String,
    sender:{ id: String, name: String, photo: String}
})

module.exports = mongoose.model('message', messageSchema)