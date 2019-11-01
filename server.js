var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var height = req.body.height;
  var weight = req.body.weight;
  var bmi = Math.floor(weight / (height * height));
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
  console.log("Server is started on Port:3000");
});
