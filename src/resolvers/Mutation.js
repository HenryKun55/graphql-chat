const Message = require('../models/Message')

const Mutation = {
    async addMessage(_, { title, body, author }, { pubsub }){

        const message = await Message.create({title, body, author})
        
        pubsub.publish("message", {
            message: {
                mutation: "newMessage",
                data: message
            }
        });

        return message
    }
}


module.exports = Mutation