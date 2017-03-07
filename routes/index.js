const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');



// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  //res.render( 'index', locals );
});

// router.get('/stylesheets/style.css',function(req,res){
//   //res.sendFile('stylesheets/style.css');//Not working for some reason...
//   res.sendFile('/Users/lli494/Desktop/Foundations/twitter-js/public/stylesheets/style.css');
//   //MUST BE ABSOLUTE PATH... NOT RELATIVE
// });
//The above had to be commented out once we included static routing (see app.js)

module.exports = router;
