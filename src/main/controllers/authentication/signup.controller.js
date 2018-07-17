class SignupController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.SignupService = require('../../services/authentication/signup.service')
    }

    async signup() {
        const service = new this.SignupService();
        const response = await service.signup({ first_name: this.req.body.first_name, last_name: this.req.body.last_name, email: this.req.body.email, username: this.req.body.username, password: this.req.body.password });
        this.res.status(response.statusCode).send(response.response);
    }
}

module.exports = SignupController;