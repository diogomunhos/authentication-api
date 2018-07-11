class UserHelper {
    constructor(user) {
        this.user = user;
        this.labels = require('../../labels/authentication.label');
    }

    isValidToLogin() {
        this.isUsernameValidToLogin();
        this.isPasswordValidToLogin();
    }

    isUsernameValidToLogin() {
        const StringHelper = require('./string-common.helper');
        if (this.user.username === undefined || this.user.username === "" || this.user.username === null) {
            throw new Error(this.labels.missing_username_error);
        }
        if (!StringHelper.isEmailValid(this.user.username)) {
            throw new Error(this.labels.invalid_email_format);
        }
    }
    isPasswordValidToLogin() {
        if (this.user.password === undefined || this.user.password === "" || this.user.password === null) {
            throw new Error(this.labels.missing_password_error);
        }
    }

    isValidCredentials() {
        if (this.user.length === 0) {
            throw new Error(this.labels.invalid_username_or_password);
        }
    }

    setUser(user) {
        this.user = user;
    }
}

module.exports = UserHelper;