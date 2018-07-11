const { AfterAll, BeforeAll } = require('cucumber');

const server = require('../../../main/config/server/server');
const SeedGenerator = require('../../seeds/index');

// Synchronous
BeforeAll(async function() {
    server.setDatabaseName("projectfa-test");
    server.init();
    server.start();
    await SeedGenerator.createUser();
});

AfterAll(function() {
    server.dropDatabase();
    setTimeout(() => {
        server.close();
    }, 5000);
});