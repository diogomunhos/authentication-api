class UserHelper {
    constructor(user) {
        this.user = user;
        this.labels = require('../../labels/authentication.label');
        this.StringHelper = require('./string-common.helper');
    }

    isValidToLogin() {
        this.isUsernameValidToLogin();
        this.isPasswordValidToLogin();
    }

    isUsernameValidToLogin() {
        if (this.StringHelper.isInvalid(this.user.username)) {
            throw new Error(this.labels.missing_username_error);
        }
        if (!this.StringHelper.isEmailValid(this.user.username)) {
            throw new Error(this.labels.invalid_email_format);
        }
    }
    isPasswordValidToLogin() {
        if (this.StringHelper.isInvalid(this.user.password)) {
            throw new Error(this.labels.missing_password_error);
        }
    }

    isValidCredentials(password) {
        if (this.user.length === 0 || !this.isPasswordCorrectly(password)) {
            throw new Error(this.labels.invalid_username_or_password);
        }
    }

    setUser(user) {
        this.user = user;
    }

    isPasswordCorrectly(password) {
        const bcrypt = require('bcrypt');
        const response = bcrypt.compareSync(password, this.user[0].password);
        return response;
    }
}

module.exports = UserHelper;