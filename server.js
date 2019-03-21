require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
// var session = require('express-session');
// const passport = require('passport');
// const MongoStore = require('connect-mongo')(sesssion);
// const flash = require('express-flash');
const app = express();
const PORT = process.env.PORT || 3001;
//require('./config/passport');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/vontimelinedb';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, () =>
  console.log(`API server now listening on http://localhost:${PORT}`)
);
