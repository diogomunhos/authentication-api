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
        } else {

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