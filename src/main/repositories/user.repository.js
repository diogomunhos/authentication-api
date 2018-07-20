class UserRepository {
    constructor() {
        this.UserModel = require('../models/user.model');
    }

    async createUser(request) {
        const model = new this.UserModel(request);
        const user = await model.save();
        return user;
    }

    async getUserByUsername(username) {
        const user = await this.UserModel.find({ username }).exec();
        return user;
    }

}

module.exports = new UserRepository();