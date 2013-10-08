// var expressControllers = require('express-controller');

// //Your express-app
// var express = require("express");
// var app = express();

// //Tell expressControllers to use the controllers-directory, and use bind() to set up routing.
// expressControllers
// 	.setDirectory('/controllers')
// 	.bind(app);






var express = require("express");
var http = require("http");
//var expressControllers = require('express-controller');
var app = express();


// var model = new (require("/controllers"));
// model.insert({
//     title: "Home",
//     text: "...",
//     type: "index"
// });

// Set the view directory to /views
app.set("views", __dirname + "/views");

// Let's use the Jade templating language
app.set("view engine", "jade");

app.all("*", function(request, response, next) {
  //response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.render("index", { message: "I love anime" });
});

app.get("/about", function(request, response) {
  response.render("about", { message: "I love anime" });
});

app.get("*", function(request, response) {
  response.end("404!");
});

http.createServer(app).listen(1337);