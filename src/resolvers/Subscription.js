const Subscription = {
    typing: {
        subscribe(_, args, { pubsub }) {
            return pubsub.asyncIterator('typing')
        } 
    },
    message: {
        subscribe(_, args, { pubsub }) {
            return pubsub.asyncIterator('message')
        }
    }
}

module.exports = Subscription