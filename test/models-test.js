(function () {
  'use strict';
  var chai = require('chai'),
   expect = chai.expect,
   chaiHttp = require('chai-http'),
   models = require('models');

  chai.use(chaiHttp);


  // MODELS
  describe('MODELS', function() {
    describe('Sample Model', function() {
      it('should default "urlRoot" property to "/api/samples"', function() {
        var sample = new models.Sample();
        sample.urlRoot.should.equal('/api/samples');
      });
    });

  });


  // MODELS & COLLECTIONS DATA FETCH
  describe('COLLECTIONS models was fetch: ', function () {
    describe('collection HOME - ', function () {
      // get json
      it('json file was get', function (done) {
        chai.request('http://localhost:3000')
          .get('/scripts/models/data_home.json')
          .res(function(req) {
              expect(req).to.have.status(200);
        });
        done();
      });
      // parse json
      it('json file json was parse', function (done) {
        chai.request('http://localhost:3000')
          .get('/scripts/models/data_home.json')
          .res(function(req) {
              expect(req).to.be.json;
        });
        done();
      });
    });
    // ... put here more collection fecth block comprobation...
  });
})();