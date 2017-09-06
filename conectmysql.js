var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "habitaciones"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from dt_habitaciones", function(err, result, fileds){
  	if(err) throw err;
  	console.log("results : ");
  	console.log(result);
  	console.log("fileds :p :D");
  	console.log(fileds);
  });
});

