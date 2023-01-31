if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('layout', 'layouts/layout');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

const db = require('./models/conn.js');

const indexRouter = require('./routes/index');
app.use('/', indexRouter); // the main route being CONTROLED BY indexRouter

const loginRouter = require('./routes/login');
app.use('/login', loginRouter); // the login route being CONTROLED BY loginRouter

const signupRouter = require('./routes/signup');
app.use('/signup', signupRouter); // the main route being CONTROLED BY indexRouter

const infoRouter = require('./routes/info');
app.use('/info', infoRouter); // the main route being CONTROLED BY index


app.listen(process.env.PORT || 3000)