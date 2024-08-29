const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    studentName: String,
    email: String,
    queryText: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Query', querySchema);
