const app = require('../../server/index.js');
const request = require('supertest');

describe('GET /products', () => {
  test('retrieves products from the database', (done) => {
    request(app)
      .get('/products')
      .expect(res => {
        expect(res.statusCode).toBe(200);
        let products = JSON.parse(res.text);
        expect(products.length).toBeGreaterThan(0);
      })
      .end(done);
  });
});

describe('GET /product', () => {
  test('finds a product with given itemId', (done) => {
    return request(app)
      .get('/products')
      .then(res => {
        let products = JSON.parse(res.text);
        let id = products[0].itemId;

        return request(app)
          .get(`/products/${id}`)
          .expect(res => {
            expect(res.statusCode).toBe(200);
            let product = JSON.parse(res.text)[0];
            expect(Object.keys(product).length).toBeGreaterThan(0);
            done();
          });
      });
  });
});

describe('invalid GET', () => {
  test('should provide a 404 statusCode given an invalid URL', (done) => {
    request(app)
      .get('/invalidUrl')
      .expect(404, done);
  });
});