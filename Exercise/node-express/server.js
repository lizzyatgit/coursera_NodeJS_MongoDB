var hostname = 'localhost';
var port = 3000;
var express = require('express');
var app = express();
var morgan = require('morgan');
var dishes = require('./dishRouter');
var leaders = require('./leaderRouter');
var promotions = require('./promotionRouter');

app.use(morgan('dev'));


app.use('/dishes',dishes);
app.use('/leadership',leaders);
app.use('/promotions',promotions);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});