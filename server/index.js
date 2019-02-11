const express = require('express');
const bodyParser = require('body-parser');

const Product = require('../db/Product.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/products', (req, res) => {
  Product.find()
    .then(products => res.status(200).send(JSON.stringify(products)))
    .catch(err => {
      console.error('There was an error retrieving the products:', err);
      res.status(500).send('');
    });
});

app.get('/products/random', (req, res) => {
  Product.find()
    .then(products => {
      let numOfProducts = products.length;
      let randomProduct = products[Math.floor(Math.random() * numOfProducts)];
      res.status(200).send(JSON.stringify(randomProduct));
    })
    .catch(err => {
      console.error('There was an error retrieving a random product:', err);
      res.status(500).send('');
    });
});

app.get('/products/:itemId', (req, res) => {
  Product.find({ itemId: req.params.itemId })
    .then(product => res.status(200).send(JSON.stringify(product)))
    .catch(err => {
      console.error('There was an error retrieving a product:', err);
      res.status(500).send('');
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;