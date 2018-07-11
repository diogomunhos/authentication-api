class SeedGenerator {
    constructor() {
        this.UserModel = require('../../main/models/user.model');
    }

    async createUser() {
        const user_to_load = require('../seeds/data/users.seed');
        const uModel = new this.UserModel(user_to_load);
        const user = await uModel.save();
    }
}

module.exports = new SeedGenerator();