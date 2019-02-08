const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hrei';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;