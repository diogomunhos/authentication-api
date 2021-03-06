class AuthenticationController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.AuthenticationService = require('../../services/authentication/authentication.service')
    }


    async login() {
        const service = new this.AuthenticationService();
        const response = await service.login(this.req.body.username, this.req.body.password);
        this.res.status(response.statusCode).send(response.response);
    }
}

module.exports = AuthenticationController;