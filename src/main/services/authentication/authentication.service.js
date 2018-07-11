class AuthenticationService {
    constructor() {
        this.UserHelper = require('../../helpers/user.helper');
        this.UserModel = require('../../models/user.model');
        this.ModelHelper = require('../../helpers/model.helper');
        this.ResponseHelper = require('../../helpers/response.helper');
    }

    async login(username, password) {
        try {
            const userHelper = new this.UserHelper({ username, password });
            userHelper.isValidToLogin();
            const user = await this.UserModel.find(userHelper.user).exec();
            userHelper.setUser(user);
            userHelper.isValidCredentials();
            const response = await this.ResponseHelper.createSuccessResponse(user[0]);
            return response;
        } catch (err) {
            return this.ResponseHelper.createFailResponse(401, err);
        }
    }
}

module.exports = AuthenticationService;