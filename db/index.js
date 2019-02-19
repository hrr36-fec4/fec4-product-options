const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/hrei-product-options';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;
