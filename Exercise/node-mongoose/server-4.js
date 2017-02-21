var mongoose = require('mongoose'),
    assert = require('assert');

var Promotions = require('./models/promotions');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    Promotions.create({
        name: 'Uthapizza',
        
         image: 'images/uthapizza.png',

      label: 'New',
      price: '4.99',
       description: 'Test',

        
        
    }, function (err, promotion) {
        if (err) throw err;
        console.log('Promotion created!');
        console.log(promotion);

     
    });
});