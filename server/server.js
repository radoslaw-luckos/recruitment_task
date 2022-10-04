const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(express.json());


//greeting route
app.get('/', (req, res) => {
    res.send('Welcome to our events API');
})

//imported events routes
const eventsRoutes = require('./routes/events.js');
app.use('/events', eventsRoutes);


//create cb connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
    .catch(err => console.log(err.message))