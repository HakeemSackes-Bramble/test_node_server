var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/hakksaxx";
var db = pgp(connectionString);

module.exports = db;