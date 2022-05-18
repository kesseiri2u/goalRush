var express = require('express');
var port = 3000
const path = require('path')
  
var matchRouter = require('./routes/match');

var app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/match', matchRouter);

app.get('/', function(req, res){
  
  // Rendering our web page i.e. Demo.ejs
  // and passing title variable through it
  res.render('Demo', {
      title: 'View Engine Demo'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
