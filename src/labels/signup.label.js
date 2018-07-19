class SignupLabel {

    constructor() {
        this.missing_first_name_error = "First name cannot be null";
        this.missing_username_error = "Username cannot be null";
        this.missing_password_error = "Password cannot be null";
        this.missing_last_name_error = "Last name cannot be null";
        this.missing_email_error = "Email cannot be null"
        this.invalid_email_format_error = "Email format is invalid";
        this.user_created_success = "User created";
        this.user_already_exists_error = "User already exists";
        this.week_password_error = "The password must contain at least one lowercase alphabetical character, uppercase alphabetical character, one numeric character, one special character and be eight characters or longer";
    }

}

module.exports = new SignupLabel();