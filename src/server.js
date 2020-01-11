const { GraphQLServer, PubSub } = require('graphql-yoga')
const mongoose = require('mongoose');

const resolvers = require('./resolvers')

mongoose.connect('mongodb+srv://book:bookpass@cluster0-kvche.mongodb.net/messages?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs: `${__dirname}/app.graphql`,
    resolvers,
    context: {
        pubsub
    }
})

server.start()