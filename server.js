const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/", function(req, res){

     var wt = Number(req.body.wt);
     var ht = Number(req.body.ht);
     var n = Math.round(wt/(ht^2));

    res.send("Your BMI is " + n);
});


app.listen(3000, function(){
    console.log("Server started at port 3000");
});