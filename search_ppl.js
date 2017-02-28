
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

const userInp = process.argv.slice(2);
//console.log(userInp[0]);

knex
  .select('*')
  .from('famous_people')
  .where('last_name', userInp[0])
  .then((results) => {
    console.log(results);
  })
  .catch((error)=>{
    console.log(error);
  });
