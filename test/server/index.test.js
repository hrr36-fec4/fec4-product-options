const request = require('supertest');
const app = require('../../server/index.js');

describe('GET /products', () => {
  test('retrieves products from the database', (done) => {
    request(app)
      .get('/products')
      .expect((res) => {
        expect(res.statusCode).toBe(200);
        const products = JSON.parse(res.text);
        expect(products.length).toBeGreaterThan(0);
      })
      .end(done);
  });
});

describe('GET /products/random', () => {
  test('retrieves a random product from the database', (done) => {
    request(app)
      .get('/products/random')
      .expect((res) => {
        expect(res.statusCode).toBe(200);
        const product = JSON.parse(res.text);
        expect(Object.keys(product).length).toBeGreaterThan(0);
      })
      .end(done);
  });
});

describe('GET /products/:itemId', () => {
  test('finds a product with given itemId', (done) => {
    request(app)
      .get('/products')
      .then((res1) => {
        const products = JSON.parse(res1.text);
        const id = products[0].itemId;

        return request(app)
          .get(`/products/${id}`)
          .expect((res2) => {
            expect(res2.statusCode).toBe(200);
            const product = JSON.parse(res2.text)[0];
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
