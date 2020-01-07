const Message = require('../models/Message')

const Query = {
    messages(){
        return Message.find({})
    }
}

module.exports = Query