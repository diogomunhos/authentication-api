class SeedGenerator {
    constructor() {
        this.UserModel = require('../../main/models/user.model');
    }

    async createUser() {
        const seed = require('../seeds/data/users.seed');
        const user_to_load = {
            first_name: seed.first_name,
            last_name: seed.last_name,
            username: seed.username,
            password: null,
            email: seed.email,
        }
        const bcrypt = require('bcrypt');
        user_to_load.password = bcrypt.hashSync(seed.password, 10);
        const uModel = new this.UserModel(user_to_load);
        const user = await uModel.save();
    }
}

module.exports = new SeedGenerator();