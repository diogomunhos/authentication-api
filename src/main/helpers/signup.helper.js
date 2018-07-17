class SignupHelper {
    constructor(signup_request) {
        this.signup_request = signup_request;
    }

    isRequestValid() {
        this.isLastNameValid();
        this.isFirstNameValid();
        this.isPasswordValid();
        this.isEmailValid();
    }

    isLastNameValid() {
        if (this.signup_request.last_name === undefined || this.signup_request.last_name === "" || this.signup_request.last_name === null) {
            throw new Error("last name is required");
        }
    }

    isFirstNameValid() {
        if (this.signup_request.first_name === undefined || this.signup_request.first_name === "" || this.signup_request.first_name === null) {
            throw new Error("first name is required");
        }
    }

    isPasswordValid() {
        if (this.signup_request.password === undefined || this.signup_request.password === "" || this.signup_request.password === null) {
            throw new Error("password is required");
        }
    }

    isEmailValid() {
        const stringHelper = require('./string-common.helper');
        if (this.signup_request.email === undefined || this.signup_request.email === "" || this.signup_request.email === null || !stringHelper.isEmailValid(this.signup_request.email)) {
            throw new Error("email is required");
        }
    }




}

module.exports = SignupHelper;