const mongoose = require('mongoose')


var commentSchema = new mongoose.Schema({
    text: String,
    date: String,
    author: { id: String, name: String, photo: String}
})


var postSchema = new mongoose.Schema({
    text: String,
    type: String,
    category: [String],
    code: String,
    visibility: String,
    files: [String],
    date: String,
    likes: Number,
    comments: [commentSchema],
    files: [{_id: false, name: String, size: Number}],
    author: {_id: String, name: String, photo: String}
})


module.exports = mongoose.model('post',postSchema)