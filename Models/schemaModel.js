const mongoose = require('mongoose');

const { Schema } = mongoose;

let todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', todoSchema);
