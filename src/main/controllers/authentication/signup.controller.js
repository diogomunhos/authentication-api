class SignupController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.SignupService = require('../../services/authentication/signup.service')
    }

    async signup() {
        const service = new this.SignupService();
        const response = await service.signup(this.req.body);
        this.res.status(response.statusCode).send(response.response);
    }
}

module.exports = SignupController;