const chai = require('chai');
const request = require('supertest');
const expect = chai.expect;

const app = require('../server');
const db = require('../models');

const users = [
  {
    email: 'pepe@lepu.com',
    username: 'pepe',
    password: 'lepu',
  },
  {
    email: 'lepu@pepe.com',
    username: 'lepu',
    password: 'pepe',
  }
];

describe('Routes: Projects', () => {
  beforeEach((done) => {
    db.User.remove({}, (err) => {
      if (err) console.log(err);
    })
      .then(() => { done(); })
  })

  describe('Create', () => {
    it('')
  })
})