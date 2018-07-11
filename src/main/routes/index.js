const authentication = require('./auth/authentication');

module.exports = (app) => {
    app.use('/auth', authentication);
}