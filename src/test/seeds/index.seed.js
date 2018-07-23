class SeedGenerator {
    constructor() {
        this.UserModel = require('../../main/models/user.model');
    }

    async init() {
        await this.createUser();
    }

    async createUser() {
        const user_to_load = require('../seeds/data/users.seed');
        const bcrypt = require('bcrypt');
        user_to_load.password = bcrypt.hashSync(user_to_load.password, 10);
        const uModel = new this.UserModel(user_to_load);
        const user = await uModel.save();
    }
}

module.exports = new SeedGenerator();