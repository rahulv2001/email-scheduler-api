const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    recipient: String,
    subject: String,
    body: String,
    scheduleTime: Date,
    status: { type: String, default: 'scheduled' },
});

module.exports = mongoose.model('Email', emailSchema);
