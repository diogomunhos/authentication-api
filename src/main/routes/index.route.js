const authentication = require('./auth/authentication.route');

module.exports = (app) => {
    app.use('/auth', authentication);
}