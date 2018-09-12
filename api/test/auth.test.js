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
    it('returns error if username/email is taken', (done) => {
      request(app)
        .post('/api/auth/register')
        .send({
          email: 'pepe@lepu.com',
          username: 'pepe',
          password: 'lepu',
        })
        .expect(200)
        .end((err, res) => {
          request(app)
            .post('/api/auth/register')
            .send({
              email: 'pepe@lepu.com',
              username: 'pepe',
              password: 'lepu',
            })
            .expect(400)
            .end((err, res) => done(err))
        })
    })
  })

  describe('User Login', () => {
    it('incorrect form submission', (done) => {
      request(app)
        .post('/api/auth/signin')
        .send({          
          username: 'pepe',
          password: '',
        })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.have.property('error');
          expect(res.body.error.message).to.deep.equal('Incorrect form submission');
          done(err);
        });
    })

    it('correct signin', (done) => {
      request(app)
        .post('/api/auth/register')
        .send({
          email: 'pepe@lepu.com',
          username: 'pepe',
          password: 'lepu',
        })
        .expect(200)
        .end((err, res) => {
          request(app)
            .post('/api/auth/signin')
            .send({
              email: 'pepe@lepu.com',
              username: 'pepe',
              password: 'lepu',
            })
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('token');
              done(err);
            });
        });
    })

    it('should return error if incorrect email/password', (done) => {
      request(app)
        .post('/api/auth/register')
        .send({
          email: 'pepe@lepu.com',
          username: 'pepe',
          password: 'lepu',
        })
        .expect(200)
        .end((err, res) => {
          request(app)
            .post('/api/auth/signin')
            .send({
              email: 'pepe@lepu.com',
              username: 'pepe',
              password: 'lepuu',
            })
            .expect(400)
            .end((err, res) => {
              expect(res.body).to.have.property('error');
              expect(res.body.error.message).to.deep.equal('Invalid Email/Password');
              done(err);
            });
        });
    })
  })
})
