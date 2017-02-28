
const pg = require("pg");
const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname
  }
});

const lastName = process.argv[2];
const firstName = process.argv[3];
const birthDate = process.argv[4];

// Without return:
knex.insert({last_name: lastName, first_name: firstName, birthdate: birthDate}).into('famous_people')
  .then(function(result) {
    console.log(result);
  });
