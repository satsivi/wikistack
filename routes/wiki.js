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
  User.findOrCreate({
    where: {
      name: req.body.author,
      email: req.body.email
    }
  })
  .then(function(values){
    let user = values[0]

    var page = Page.build({
      title: req.body.title,
      content: req.body.content
    });

    return page.save()
      .then(function (savedPage) {
        return savedPage.setAuthor(user);
      });
  })
  .then(function(page){
    res.redirect(page.route);
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
