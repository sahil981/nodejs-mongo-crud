var PORT = process.env.PORT || 3000;
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Student} = require('./models/student')



var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
require('./routes/routes')(app);


app.listen(PORT, ()=>{
    console.log('Started on port ' + PORT);
});

module.exports = {app};