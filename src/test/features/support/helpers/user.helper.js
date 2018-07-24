class UserHelper {
    constructor() {
        this.macGyver = require('../../../seeds/data/users.seed');
    }

    generateBaseUser() {
        return {
            first_name: "teste",
            last_name: "name",
            email: "teste@teste.com",
            username: "teste@teste.com",
            password: "Password#2018",
            birthdate: new Date(),
            born_country: "Brazil",
            document_number: "1234567"
        }
    }

    getWrongCredentials() {
        return { username: this.macGyver.username, password: "wrongPassword" };
    }

    getNoUsernameCredentials() {
        return { username: null, password: this.macGyver.password_plain };
    }

    getValidCredentials() {
        return { username: this.macGyver.username, password: this.macGyver.password_plain };
    }

    getNoPasswordCredentials() {
        return { username: this.macGyver.username, password: null };
    }

    getValidUser() {
        return this.generateBaseUser();
    }

    getSignupUserWithoutFirstName() {
        const user = this.generateBaseUser();
        user.first_name = null;
        return user;
    }

    getSignupUserWithoutLastName() {
        const user = this.generateBaseUser();
        user.last_name = null;
        return user;
    }

    getSignupUserWithoutEmail() {
        const user = this.generateBaseUser();
        user.email = null;
        return user;
    }

    getSignupUserWithoutUsername() {
        const user = this.generateBaseUser();
        user.username = null;
        return user;
    }

    getSignupUserWithoutBornCountry() {
        const user = this.generateBaseUser();
        user.born_country = null;
        return user;
    }

    getSignupUserWithoutBirthDate() {
        const user = this.generateBaseUser();
        user.birthdate = null;
        return user;
    }

    getSignupUserWithoutDocumentNumber() {
        const user = this.generateBaseUser();
        user.document_number = null;
        return user;
    }

    getSignupUserWithoutPassword() {
        const user = this.generateBaseUser();
        user.password = null;
        return user;
    }

    getSignupUserWithInvalidBirthDate() {
        const user = this.generateBaseUser();
        user.birthdate = "1231231231312qweqeq12312313";
        return user;
    }

    getSignupUserWithInvalidEmail() {
        const user = this.generateBaseUser();
        user.email = "teste.teste.com";
        return user;
    }

    getSignupUserWithWeekPasswordUpperCase() {
        const user = this.generateBaseUser();
        user.password = "password#2018";
        return user;
    }

    getSignupUserWithWeekPasswordLowerCase() {
        const user = this.generateBaseUser();
        user.password = "PASSWORD#2018";
        return user;
    }

    getSignupUserWithWeekPasswordSpecialCharacter() {
        const user = this.generateBaseUser();
        user.password = "Password2018";
        return user;
    }

    getSignupUserWithWeekPasswordLength() {
        const user = this.generateBaseUser();
        user.password = "Pass#20";
        return user;
    }
}

module.exports = new UserHelper();