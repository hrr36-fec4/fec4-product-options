const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://Administrator:admin@cluster0-sp44m.mongodb.net/hrei-product-options?retryWrites=true';

mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

module.exports = db;
