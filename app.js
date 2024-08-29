const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Query = require('./models/Query');

const app = express();

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://rbhanu24:Ganga001%40@studentportal.1nb9s.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.render('index', { queries });
});

app.post('/add-query', async (req, res) => {
    const { studentName, email, queryText } = req.body;
    const newQuery = new Query({ studentName, email, queryText });
    await newQuery.save();
    res.redirect('/');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
