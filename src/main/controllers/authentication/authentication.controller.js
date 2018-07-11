class AuthenticationController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.AuthenticationService = require('../../services/authentication/authentication')
    }


    async login() {
        console.log(this.req.socket.remoteAddress);
        const service = new this.AuthenticationService();
        const response = await service.login(this.req.body.username, this.req.body.password);
        this.res.status(response.statusCode).send(response.response);
    }
}

module.exports = AuthenticationController;