const express = require('express');
const models = require('../models');
const wikiRoutes = require('./wiki.js');
const userRoutes = require('./users.js');

const router = express.Router();


router.get('/', function(req, res, next){
  models.Page.findAll({})
    .then(function (foundPages) {
      console.log("found pages here", foundPages)
      res.render('index', {pages: foundPages});
    })
    .catch(next);

  //res.render('index', {header: 'This is my header'});
});

router.use('/wiki', wikiRoutes);
router.use('/users', userRoutes);

module.exports = router;
