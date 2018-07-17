class SignupService {
    constructor() {
        this.SignupHelper = require('../../helpers/signup.helper');
        this.UserModel = require('../../models/user.model');
        this.ModelHelper = require('../../helpers/model.helper');
        this.ResponseHelper = require('../../helpers/response.helper');
    }

    async signup(signup_request) {
        try {
            console.log('request', signup_request);
            const signupHelper = new this.SignupHelper(signup_request);
            signupHelper.isRequestValid();
            console.log('valido');
            const model = new this.UserModel(signup_request);
            console.log('model criado');
            const user = await model.save();
            console.log('model salvo');
            const response = await this.ResponseHelper.createSignupSuccessResponse();
            return response;
        } catch (err) {
            console.log('catch entrou');
            const response = await this.ResponseHelper.createFailResponse(401, err);
            return response;
        }
    }
}

module.exports = SignupService