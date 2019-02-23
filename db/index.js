const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://Administrator:5k%9aD1Gw8pG@cluster0-sp44m.mongodb.net/test?retryWrites=true/hrei-product-options';

mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

module.exports = db;
