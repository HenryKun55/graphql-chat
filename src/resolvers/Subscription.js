const { withFilter } = require('graphql-yoga')

const Subscription = {
    typing: {
        subscribe(_, args, { pubsub }) {
            withFilter(
                () => pubsub.asyncIterator('typing'),
                (payload, variables) => {
                    return payload.author === variables.author;
                }
            )
        } 
    },
    message: {
        subscribe(_, args, { pubsub }) {
            return pubsub.asyncIterator('message')
        }
    }
}

module.exports = Subscription