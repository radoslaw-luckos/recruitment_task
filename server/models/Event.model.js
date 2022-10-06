const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "The first name field shouldn't be empty. Please enter your name!"]
    },
    lastName: {
        type: String,
        required: [true, "The last name field shouldn't be empty. Please enter your surname!"]
    },
    email: {
        type: String,
        required: [true, "The email field shouldn't be empty. Please enter your email address!"]
    },
    eventDate: {
        type: Date,
        required: [true, "Please enter correct date of your event!"]
    }
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;