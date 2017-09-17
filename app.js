var express = require("express");

var app = express();

console.log('date ' + new Date());

/*
	REST end point
	http://localhost:8080/
*/
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post('/login', function(req, res) {
	res.end("login successful");
});
var port = process.env.PORT || 8080;
  
app.listen(port, function() {
	console.log("App is running on port " + port);
});