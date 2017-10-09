const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const passport   = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

require('./config/database');

var whitelist = [
    'http://localhost:4200',
];

var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions));

app.locals.title = 'Retal';

app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

app.use(session({
  secret: '3fe397575565365108556c3e5549f139e8078a8ec8fd2675a83de96289b30550a266ac04488d7086322efbe573738e7b3ae005b2e3d9afd718aa337fa5e329cf',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 60*60*24*365 },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

require('./passport/serializers');
require('./passport/local');
app.use(passport.initialize());
app.use(passport.session());


const userApi = require('./models/userRoutes');
app.use('/users', userApi);

const authRoutes = require('./routes/api/auth');
app.use('/api/auth', authRoutes);

const campaignApi = require('./routes/api/campaign/campaignRoutes');
app.use('/api', campaignApi);

const fabricApi = require('./routes/api/fabric/fabricRoutes');
app.use('/api', fabricApi);

const orderApi = require('./routes/api/order/orderRoutes');
app.use('/api', orderApi)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
