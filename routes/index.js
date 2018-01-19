const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static('public'));

router.get('/', function(req, res, next){
  res.send('Yo');
});



module.exports = router;
