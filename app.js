var express = require('express');

var app = express();

/*
	REST end point
	http://localhost:8080/
*/
app.get("/", function(req, res) {
	res.sendfile(__dirname + "/index.html")
});

var port = process.env.PORT || 8080;

//app.get(routename, clbk);
app.listen(port, function() {
	console.log("App is running on port " + port);
});