const express = require('express');
const app = express();
const auth = require('./middleware/auth');
require('dotenv').config();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/protectedRoute', (req, res) => {
    res.send('This Is An Protected Route. You Are Authenticated.')
})

const homeRouter = require('./routes/home');
const contactRouter =  require('./routes/contact');
const aboutRouter = require('./routes/about');
const userRouter = require('./routes/user')

app.use('/', homeRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/")
})