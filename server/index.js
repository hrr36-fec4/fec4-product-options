const express = require('express');
const bodyParser = require('body-parser');

const Product = require('../db/Product.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/products', (req, res) => {
  const getProducts = (callback) => {
    return Product.find((err, products) => {
      if (err) callback(err, null);
      callback(null, products);
    });
  };

  getProducts((err, products) => {
    if (err) {
      console.error('There was an error retrieving the products:', err);
      res.status(500).send('');
    }
    res.status(200).send(JSON.stringify(products));
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});