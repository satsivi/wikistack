const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

// router.get('/', function(req, res, next){
//   res.send('You\'ve reached the wiki page!!');
// });

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });
  //console.log('this is my page: ', page);
  page.save()
  .then(res.json(page));

  //console.log(page);
  //.catch(console.log(err));

});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});


module.exports = router;
