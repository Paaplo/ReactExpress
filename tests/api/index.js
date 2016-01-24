process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from "mongoose";
import config from '../../config.js';
let server =require ('../../server.js');
import Post from "../../api/models/post";

const should = chai.should();
chai.use(chaiHttp);

describe('Init', function(){
  before(function (done) {
    mongoose.connection.on('connected', done);
  });

  it('Should connect to MongoDB AND database is test DB', function(done) {
     mongoose.connection.readyState === 1 && Post.db.name === 'db-test' ? done(): done(false);
  });    
});
describe('Posts', function() {

  Post.collection.drop();

  beforeEach(function(done){
    var newPost = new Post({
      title: 'Bat',
      text: 'man'
    });
    newPost.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    Post.collection.drop();
    done();
  });
    
  it('should list ALL posts on /api/posts GET', function(done) {
    chai.request(server)
        .get('/api/posts')
        .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('title');
        res.body[0].should.have.property('text');
        res.body[0].title.should.equal('Bat');
        res.body[0].text.should.equal('man');
        done();
        });
    });
    
  it('should list a SINGLE post on /api/posts/<id> GET', function(done) {
      var newPost = new Post({
        title: 'Super',
        text: 'man'
      });
      newPost.save(function(err, data) {
        chai.request(server)
          .get('/api/posts/'+data.id)
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('_id');
            res.body.should.have.property('title');
            res.body.should.have.property('text');
            res.body.title.should.equal('Super');
            res.body.text.should.equal('man');
            res.body._id.should.equal(data.id);
            done();
          });
      });
  });

  it('should add a SINGLE post on /api/posts POST', function(done) {
    chai.request(server)
      .post('/api/posts')
      .send({'title': 'Java', 'text': 'Script'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('title');
        res.body.SUCCESS.should.have.property('text');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.title.should.equal('Java');
        res.body.SUCCESS.text.should.equal('Script');
        done();
      });
  });

  it('should update a SINGLE post on /posts/<id> PUT', function(done) {
    chai.request(server)
      .get('/api/posts')
      .end(function(err, res){
        chai.request(server)
          .put('/api/posts/'+res.body[0]._id)
          .send({'title': 'Spider'})
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('UPDATED');
            response.body.UPDATED.should.be.a('object');
            response.body.UPDATED.should.have.property('title');
            response.body.UPDATED.should.have.property('_id');
            response.body.UPDATED.title.should.equal('Spider');
            done();
        });
      });
  });

  it('should delete a SINGLE post on /api/posts/<id> DELETE', function(done) {
    chai.request(server)
      .get('/api/posts')
      .end(function(err, res){
        chai.request(server)
          .delete('/api/posts/'+res.body[0]._id)
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('REMOVED');
            response.body.REMOVED.should.be.a('object');
            response.body.REMOVED.should.have.property('title');
            response.body.REMOVED.should.have.property('_id');
            response.body.REMOVED.title.should.equal('Bat');
            done();
        });
      });
  });

});