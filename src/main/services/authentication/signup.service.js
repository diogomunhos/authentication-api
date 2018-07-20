class SignupService {
    constructor() {
        this.SignupHelper = require('../../helpers/signup.helper');
        this.UserModel = require('../../models/user.model');
        this.ModelHelper = require('../../helpers/model.helper');
        this.ResponseHelper = require('../../helpers/response.helper');
    }

    async signup(signup_request) {
        try {
            const signupHelper = new this.SignupHelper(signup_request);
            signupHelper.isRequestValid();
            signup_request = signupHelper.getRequest();
            const result = await this.UserModel.find({ username: signup_request.username }).exec();
            signupHelper.userExists(result);
            signup_request.password = signupHelper.encryptPassword(signup_request.password);
            const model = new this.UserModel(signup_request);
            const user = await model.save();
            const response = await this.ResponseHelper.createSignupSuccessResponse();
            return response;
        } catch (err) {
            const response = await this.ResponseHelper.createFailResponse(401, err);
            return response;
        }
    }
}

module.exports = SignupService