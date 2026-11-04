const mongoose = require('mongoose');

function mongodbConnect() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log('Database Connected!'))
        .catch((err) => console.log('MongoDB Error:', err.message));
}

module.exports = mongodbConnect;