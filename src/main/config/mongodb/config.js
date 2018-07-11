module.exports = {
    production: {
        db: process.env.MONGODB_URI
    },
    test: {
        db: process.env.MONGODB_URI
    }
};