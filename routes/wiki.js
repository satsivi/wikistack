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

  //console.log('this is my page: ', page);

  User.findOrCreate({
    where: {
      email: req.body.email,
      name: req.body.author
    }
  }).then(function(values){
    var user = values[0];

    var page = Page.build({
      title: req.body.title,
      content: req.body.content,
    });

    return page.save()
      .then(function (page) {
        return page.setAuthor(user);
      })
  })
  .then(function(savedPage){
    res.redirect(savedPage.route);
  })
  .catch(next);

});



router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/:urlTitle', function(req, res, next){

  Page.findOne({
      where: {
        urlTitle: req.params.urlTitle
      }
    })
    .then(function(foundPage){
      res.render('wikipage', foundPage.dataValues);
    })
    .catch(next);

})


// Working code! Don't delete!!

// router.get('/:urlTitle', function (req, res, next) {
//     Page.findOne({
//       where: {
//         urlTitle: req.params.urlTitle
//       }
//     })
//     .then(function(foundPage){
//       res.json(foundPage);
//     })
//     .catch(next);
// });

module.exports = router;
