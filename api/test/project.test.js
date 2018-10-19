const chai = require('chai');
const request = require('supertest');
const expect = chai.expect;

const app = require('../server');
const db = require('../models');

let userID;
let token;

let projectID;

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

const project = [
  {
    name: 'xxx',
    idea: 'something awesome',
    features: 'eeee something',
    keywords: 'foo,bar'
  },
  {
    name: 'woo',
    idea: 'eeem anything',
    features: 'you know',
    keywords: 'i,dont,know'
  }
];

describe('Routes: Projects', () => {
  before((done) => {
    db.User.remove({}, (err) => {
      if (err) console.log(err);
    })
      .then(() => { 
        db.Project.remove({}, (err) => { done(); })
      })
  })

  describe('Create', () => {
    it('should create a project if user is logged in', (done) => {
      request(app)
        .post('/api/auth/register')
        .send(users[0])
        .expect(200)
        .end((err, res) => {
          request(app)
            .post('/api/auth/signin')
            .send(users[0])
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('token');
              token = res.body.token;
              userID = res.body.user._id;
              request(app)
                .post(`/api/projects/user/${userID}`)
                .set('Authorization', `Bearer ${token}`)
                .send(project[0])
                .expect(200)
                .end((err, res) => {
                  expect(res.body).to.have.property('features');
                  projectID = res.body._id;
                  done(err);
                })
            })
        })
    })

    it('should not create a project if user is not logged in', (done) => {
      request(app)
        .post(`/api/projects/user/${userID}`)
        .send(project[1])
        .expect(401)
        .end((err, res) => {
          expect(res.body).to.have.property('error');
          expect(res.body.error.message).to.deep.equal('Please log in first');
          done(err);
        })
    })

    it('should not create a project if it has the same name as another existing project', (done) => {
      request(app)
        .post(`/api/projects/user/${userID}`)
        .set('Authorization', `Bearer ${token}`)
        .send(project[0])
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.have.property('error');
          expect(res.body.error.message).to.deep.equal('Cannot create project');
          done(err);
        })
    })

    it('should not create a project if token not match with user id', (done) => {
      request(app)
        .post('/api/auth/register')
        .send(users[1])
        .expect(200)
        .end((err, res) => {
          request(app)
            .post('/api/auth/signin')
            .send(users[1])
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('token');
              userID = res.body.user._id;
              request(app)
                .post(`/api/projects/user/${userID}`)
                .set('Authorization', `Bearer ${token}`)
                .send(project[0])
                .expect(401)
                .end((err, res) => {
                  expect(res.body).to.have.property('error');
                  expect(res.body.error.message).to.deep.equal('Unauthorized');
                  done(err);
                })
            })
        })
    })
  })

  describe('Read', () => {
    it('should get all the projects successfully', (done) => {
      request(app)
        .post('/api/auth/signin')
        .send(users[0])
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('token');
          token = res.body.token;
          userID = res.body.user._id;
          request(app)
            .get('/api/projects')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
              expect(res.body[0]).to.have.property('features');
              expect(res.body[0].name).to.deep.equal('xxx');
              done(err);
            })
        })
    })
  })

  describe('Update', () => {
    it('should mark done a project for an user', (done) => {
      request(app)
        .post('/api/auth/signin')
        .send(users[1])
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('token');
          token = res.body.token;
          userID = res.body.user._id;
          request(app)
            .put(`/api/projects/user/${userID}/project/${projectID}/done`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('done');
              expect(res.body.done).to.deep.include(projectID);
              done(err);
            })
          })
    })

    it('should not mark done a project which it has been already marked as done', (done) => {
      request(app)
        .post('/api/auth/signin')
        .send(users[1])
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('token');
          token = res.body.token;
          userID = res.body.user._id;
          request(app)
            .put(`/api/projects/user/${userID}/project/${projectID}/done`)
            .set('Authorization', `Bearer ${token}`)
            .expect(400)
            .end((err, res) => {
              expect(res.body).to.have.property('error');
              expect(res.body.error.message).to.deep.equal('Cannot mark as done');
              done(err);
            })
          })
    })

    it('should mark undone a project which it has been already marked as done', (done) => {
      request(app)
        .post('/api/auth/signin')
        .send(users[1])
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('token');
          token = res.body.token;
          userID = res.body.user._id;
          request(app)
            .put(`/api/projects/user/${userID}/project/${projectID}/undone`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('done');
              expect(res.body.done).to.deep.not.include(projectID);
              done(err);
            })
          })
    })
  })

  describe('Delete', () => {
    it('should not delete a project if token not match with user id', (done) => {
      request(app)
        .delete(`/api/projects/user/${userID}1/project/${projectID}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(401)
        .end((err, res) => {
          expect(res.body).to.have.property('error');
          expect(res.body.error.message).to.deep.equal('Unauthorized');
          done(err);
        })
    })

    it('should not delete a project if user is not the owner', (done) => {
      request(app)
        .post('/api/auth/signin')
        .send(users[1])
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('token');
          token = res.body.token;
          userID = res.body.user._id;
          request(app)
            .delete(`/api/projects/user/${userID}/project/${projectID}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(401)
            .end((err, res) => {
              expect(res.body).to.have.property('error');
              expect(res.body.error.message).to.deep.equal('Unauthorized');
              done(err);
            })
        })
    })
    
    it('should delete a project successfully', (done) => {
      request(app)
        .post('/api/auth/signin')
        .send(users[0])
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('token');
          token = res.body.token;
          userID = res.body.user._id;
          request(app)
            .delete(`/api/projects/user/${userID}/project/${projectID}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('features');
              expect(res.body.name).to.deep.equal('xxx');
              done(err);
            })
        })
    })
  })
})
