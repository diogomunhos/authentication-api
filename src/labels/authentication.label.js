class AuthenticationLabel {

    constructor() {
        this.missing_username_error = "Username cannot be null";
        this.missing_password_error = "Password cannot be null";
        this.invalid_email_format = "Email format is invalid";
        this.invalid_username_or_password = "Username or password is invalid.";
    }

}

module.exports = new AuthenticationLabel();