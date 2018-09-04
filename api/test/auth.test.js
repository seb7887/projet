const chai = require('chai');
const request = require('supertest');
const expect = chai.expect;

const app = require('../server');
const db = require('../models');

describe('Routes: Auth', () => {
  beforeEach((done) => {
    db.User.remove({}, (err) => {
      if (err) console.log(err);
    })
      .then(() => { done(); })
  })

  describe('User Registration', () => {
    it('returns error if username, password and email were not provided', (done) => {
      request(app)
        .post('/api/auth/register')
        .expect(400)
        .end((err, res) => done(err));
    })

    it('success if username, password and email were provided', (done) => {
      request(app)
        .post('/api/auth/register')
        .send({
          email: 'pepe@lepu.com',
          username: 'pepe',
          password: 'lepu',
        })
        .expect(200)
        .end((err, res) => {
          done(err);
        })
    })
  })
})