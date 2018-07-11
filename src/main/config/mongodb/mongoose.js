const config = require('./config');
const mongoose = require('mongoose');
module.exports = (database_name) => {
    mongoose.Promise = global.Promise;
    const db_config = (process.env.NODE_ENV === "production" && database_name !== undefined) ? config.production.db : config.test.db;
    const db = mongoose.connect(db_config);
    mongoose.connection.on('error', (err) => {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    }).on('open', () => {
        console.log('Connection extablised with MongoDB')
    })
    return mongoose;
};