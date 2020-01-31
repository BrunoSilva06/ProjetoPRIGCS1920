var User = require('../models/user')
var Message = require('../models/message')

const Users = module.exports

Users.listar = () => {
    return User
        .find()
        .exec()
}

Users.inserir = user => {
    var novo = new User(user)
    return novo.save()
}

Users.consultar = id => { 
    return User
        .findOne({_id: id})
        .exec()
}


Users.consultaNome = name => { 
    return User
        .find({nome:{ '$regex' : name, '$options' : 'i' }})
        .exec()
}
/*
Users.listaAmigos = id => { 
    return User
        .aggregate([{ $match: {_id: id}},{$unwind: "$friends"},{$project: {_id: 0, id:"$friends.id", nome:"$friends.nome", photo:"$friends.photo"}}])
        .exec()
}*/

Users.listaAmigos = friends =>{
    return User.find({"_id" : {"$in" : friends}},{_id:1, nome:1, photo:1})
            .exec()
}

Users.apagar = id =>{
    return User
        .deleteOne({ _id: id }).exec();
}

Users.consultarEmail = email =>{
    return User 
        .findOne({email: email})
        .exec()
}

Users.addFriend = (id1 , id2) => {
    Message.deleteOne({receiver: id1, 'sender.id': id2, type: "invite"}).exec()
    User.update({_id: id2}, {$push: {friends: {_id: id1}}}).exec()
    return User
        .update({_id: id1}, {$push: {friends: {_id: id2}}})
        .exec()
}
