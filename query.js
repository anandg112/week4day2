module.exports = function query (userInp, client) {
  return {
    client.query("SELECT * from famous_people where last_name = '"+userInp+"'", (err, result) => {
      console.log("Searching ...")
      if(err) {
         return console.error("error running query", err);
      }
      for(obj of result.rows){
        console.log("Found 1 person(s) by the name "+ obj.last_name);
        console.log("- " + result.rows.length.toString() + ": " + result.rows[0].first_name +
        " "+result.rows[0].last_name + ', born '+ result.rows[0].birthdate.toDateString());
        }
    });
  }
}
