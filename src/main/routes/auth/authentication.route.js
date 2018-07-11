const Router = require('express-promise-router');
const async_package = require('async');
const AuthenticationController = require('../../controllers/authentication/authentication.controller');
const router = new Router();

router.post('/login', (req, res) => {
    const controller = new AuthenticationController(req, res);
    controller.login();
})

module.exports = router;