const express = require('express');
const models = require('../models');
const wikiRoutes = require('./wiki.js');
const userRoutes = require('./user.js');

const router = express.Router();


router.get('/', function(req, res, next){
  res.render('index', {header: 'This is my header'});
});

router.use('/wiki', wikiRoutes);
router.use('/user', userRoutes);

module.exports = router;
