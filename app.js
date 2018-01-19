const express = require('express');
const volleyball = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));

// ToDo:
// Configure Nunjucks
// Routes: router.use(express.static('public'));
// Create Views Folder + HTML page
// Make a GET request to "/" that links to index.html
// First router.get not working

app.listen(1234);
