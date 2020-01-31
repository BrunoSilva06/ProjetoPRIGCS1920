var Message = require('../models/message')

const Messages = module.exports

Messages.message = msg =>{
    var novo = new Message(msg)
    return novo.save()
}

Messages.getMessages = id =>{
    return Message
        .find({receiver: id})
        .exec()
}

Messages.getRequests = id =>{
    return Message
        .find({_id: id})
        .exec()
}

Messages.apagar = id =>{
    return Message
        .deleteOne({ _id: id }).exec();
}