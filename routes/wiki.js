const express = require('express');
const router = express.Router();

// router.get('/', function(req, res, next){
//   res.send('You\'ve reached the wiki page!!');
// });

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  res.send('got to GET /wiki/add');
});


module.exports = router;
