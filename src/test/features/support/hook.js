const { AfterAll, BeforeAll } = require('cucumber');

const server = require('../../../main/config/server/server');
const SeedGenerator = require('../../seeds/index.seed');

// Synchronous
BeforeAll(async function() {
    server.setDatabaseName("test");
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