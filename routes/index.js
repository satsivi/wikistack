const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();


router.get('/', function(req, res, next){
  res.render('index', {header: 'This is my header'});
});

module.exports = router;
