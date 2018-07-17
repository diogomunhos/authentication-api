const authentication = require('./auth/authentication.route');
const signup = require('./auth/signup.route');

module.exports = (app) => {
    app.use('/auth', authentication);
    app.use('/auth', signup);
}