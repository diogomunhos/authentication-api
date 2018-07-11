module.exports = {
    production: {
        db: process.env.MONGODB_URI
    },
    test: {
        db: process.env.MONGOLAB_CHARCOAL_URI
    }
};