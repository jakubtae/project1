if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('layout', 'layouts/layout');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
})

const indexRouter = require('./routes/index');
app.use('/', indexRouter); // the main route being CONTROLED BY indexRouter

const loginRouter = require('./routes/login');
app.use('/login', loginRouter); // the login route being CONTROLED BY loginRouter

const signupRouter = require('./routes/signup');
app.use('/signup', signupRouter); // the main route being CONTROLED BY indexRouter



app.listen(process.env.PORT || 3000)