const express = require('express');
const volleyball = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(morgan('tiny'));

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', routes);

models.sync()
  .then(function(){
    app.listen(1234, function() {
      console.log('Listening on port 1234');
    });
  })
  .catch(console.error);
