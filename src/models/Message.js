const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String
},{
    timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema)