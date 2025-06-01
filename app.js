let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let eChalan = require('./routes/e-chalan');
let shops = require('./routes/shops');

let app = express();
require('./database/database');  // connect to DB
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', eChalan);
app.use('/shops', shops);

module.exports = app;
