var Post = require('../models/post')

const Posts = module.exports

Posts.listar = () => {
    return Post
        .find()
        .sort({_id: -1})
        .exec()
}

Posts.inserir = post => {
    var novo = new Post(post)
    return novo.save()
}

Posts.apagar = id =>{
    return Post
        .deleteOne({ _id: id }).exec();
}

Posts.consultar = id => { 
    return Post
        .findOne({_id: id})
        .exec()
}
Posts.getCurso = c => {
    return Post.find({visibility: c}).exec()
}

Posts.consultarFeed = (user) =>{
    return Post
    .find({$or: [ {'author._id': {"$in" : user.friends}}, {visibility: "public" },{ visibility: user.curso },{'author._id': user._id} ]})
    .sort({_id: -1})
    .exec()
}

Posts.consultarUser = id =>{
    return Post
    .find({$and: [{'author._id': id},{visibility: {$ne: 'amigos'}}]})
    .sort({_id: -1})
    .exec()
}

Posts.consultarAmigo = id =>{
    return Post
    .find({'author._id': id})
    .sort({_id: -1})
    .exec()
}

Posts.filtrarCategoria = cat =>{
    return Post
    .find({category: cat})
    .sort({_id: -1})
    .exec()
}

Posts.comentar = (id,comment) =>{
    return Post.update({_id:id}, {$push: {comments: [comment]}})
    .exec()
}

Posts.like = id =>{
    return Post.update({_id: id},{ $inc: { likes: 1}}).exec()
}