var express = require('express');
var app = express();
const bodyParser = require("body-parser");
var port = 3000
  
var matchRouter = require('./routes/match');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/match", matchRouter);

app.set("view engine", "ejs");


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});