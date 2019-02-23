const mongoose = require('mongoose');

const mongoUri = 'mongodb://Administrator:5k%9aD1Gw8pG@cluster0-shard-00-00-sp44m.mongodb.net:27017,cluster0-shard-00-01-sp44m.mongodb.net:27017,cluster0-shard-00-02-sp44m.mongodb.net:27017/hrei-product-options?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

module.exports = db;
