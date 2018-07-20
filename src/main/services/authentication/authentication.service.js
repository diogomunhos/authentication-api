class AuthenticationService {
    constructor() {
        this.UserHelper = require('../../helpers/user.helper');
        this.ResponseHelper = require('../../helpers/response.helper');
        this.UserRepository = require('../../repositories/user.repository');
    }

    async login(username, password) {
        try {
            const userHelper = new this.UserHelper({ username, password });
            userHelper.isValidToLogin();
            const user = await this.UserRepository.getUserByUsername(userHelper.user.username);
            userHelper.setUser(user);
            userHelper.isValidCredentials(password);
            const response = await this.ResponseHelper.createSuccessResponse(user[0]);
            return response;
        } catch (err) {
            const response = await this.ResponseHelper.createFailResponse(401, err);
            return response;
        }
    }
}

module.exports = AuthenticationService;