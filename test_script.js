const pg = require("pg");
const settings = require("./settings");
//const query_mod = require('./query');

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

let userInp = process.argv.slice(2);

client.connect((err) => {
  if(err){
    return console.error("Connection Error", err);
  }
    //doQuery(userInp);
    //console.log(result.rows[0].last_name); //output: 1
    do_q(userInp, client);
    //client.end();
});

const do_q=(Inp, client)=> {
  client.query("SELECT * from famous_people where last_name = '"+userInp+"'", (err, result) => {
  console.log("Searching ...");
    if(err) {
       return console.error("error running query", err);
    }
    for(obj of result.rows){
      console.log("Found 1 person(s) by the name "+ obj.last_name);
      console.log("- " + result.rows.length.toString() + ": " + result.rows[0].first_name +
      " "+result.rows[0].last_name + ', born '+ result.rows[0].birthdate.toDateString());
    }
  });
};
