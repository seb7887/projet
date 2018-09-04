const chai = require('chai');
const request = require('supertest');

const app = require('../server');

describe('Error Handling', () => {
  it('throws an error when route not exist', (done) => {
    request(app)
      .get('/0')
      .expect(404)
      .end((err, res) => done(err));
  })
})
