const config = require('./config');
const mongoose = require('mongoose');
module.exports = (database_name) => {
    console.log(database_name)
    mongoose.Promise = global.Promise;
    const db = mongoose.connect(config.db, { dbName: database_name || "projectfa-production" });
    mongoose.connection.on('error', (err) => {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    }).on('open', () => {
        console.log('Connection extablised with MongoDB')
    })
    return mongoose;
};