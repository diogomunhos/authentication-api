const Router = require('express-promise-router');
const SignupController = require('../../controllers/authentication/signup.controller');
const router = new Router();

router.post('/signup', (req, res) => {

    const controller = new SignupController(req, res);
    controller.signup();
})

module.exports = router;