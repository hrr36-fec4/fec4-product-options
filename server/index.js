const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Product = require('../db/Product.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/products', (req, res) => {
  Product.find()
    .then(products => res.status(200).send(JSON.stringify(products)))
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/products/random', (req, res) => {
  Product.find()
    .then((products) => {
      const numOfProducts = products.length;
      const randomProduct = products[Math.floor(Math.random() * numOfProducts)];
      res.status(200).send(JSON.stringify(randomProduct));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/products/:itemId', (req, res) => {
  Product.find({ itemId: req.params.itemId })
    .then(product => res.status(200).send(JSON.stringify(product)))
    .catch((err) => {
      res.status(500).send(err);
    });
});

if (!module.parent) {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

module.exports = app;
