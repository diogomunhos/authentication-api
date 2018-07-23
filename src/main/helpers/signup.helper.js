class SignupHelper {
    constructor(signup_request) {
        this.signup_request = signup_request;
        this.labels = require('../../labels/signup.label');
        this.StringHelper = require('./string-common.helper');
    }

    isRequestValid() {
        this.isLastNameValid();
        this.isFirstNameValid();
        this.isPasswordValid();
        this.isEmailValid();
        this.isBirthDateValid();
        this.isBornCountryValid();
        this.isDocumentNumberValid();
        this.formatRequest();
    }

    isLastNameValid() {
        if (this.StringHelper.isInvalid(this.signup_request.last_name)) {
            throw new Error(this.labels.missing_last_name_error);
        }
    }

    isFirstNameValid() {
        if (this.StringHelper.isInvalid(this.signup_request.first_name)) {
            throw new Error(this.labels.missing_first_name_error);
        }
    }

    isPasswordValid() {
        const stringHelper = require('./string-common.helper');
        if (this.StringHelper.isInvalid(this.signup_request.password)) {
            throw new Error(this.labels.missing_password_error);
        } else if (!stringHelper.isPasswordStrong(this.signup_request.password)) {
            throw new Error(this.labels.week_password_error);
        }
    }

    isEmailValid() {
        const stringHelper = require('./string-common.helper');
        if (this.StringHelper.isInvalid(this.signup_request.email)) {
            throw new Error(this.labels.missing_email_error);
        } else if (!stringHelper.isEmailValid(this.signup_request.email)) {
            throw new Error(this.labels.invalid_email_format_error);
        }
    }

    isBirthDateValid() {
        if (this.StringHelper.isInvalid(this.signup_request.birthdate)) {
            throw new Error(this.labels.missing_birthdate_error);
        }
        if (new Date(this.signup_request.birthdate) == "Invalid Date") {
            throw new Error(this.labels.invalid_birthdate);
        }
    }

    isDocumentNumberValid() {
        if (this.StringHelper.isInvalid(this.signup_request.document_number)) {
            throw new Error(this.labels.missing_document_number_error);
        }
    }

    isBornCountryValid() {
        if (this.StringHelper.isInvalid(this.signup_request.born_country)) {
            throw new Error(this.labels.missing_born_country_error);
        }
    }

    userExists(user) {
        if (user !== undefined && user.length > 0) {
            throw new Error(this.labels.user_already_exists_error);
        }
    }

    encryptPassword(password) {
        const bcrypt = require('bcrypt');
        return bcrypt.hashSync(password, 10);
    }

    formatRequest() {
        this.signup_request.username = String(this.signup_request.username).toLowerCase();
        this.signup_request.email = String(this.signup_request.email).toLowerCase();
        this.signup_request.first_name = String(this.signup_request.first_name).toUpperCase();
        this.signup_request.last_name = String(this.signup_request.last_name).toUpperCase();
        this.signup_request.password = this.encryptPassword(this.signup_request.password);
        this.signup_request.user_preferences = {
            email_valid: false,
            push_notification: false,
            email_marketing: false
        }
    }

    getRequest() {
        return this.signup_request;
    }

}

module.exports = SignupHelper;