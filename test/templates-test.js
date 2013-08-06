(function () {
  'use strict';
  var chai = require('chai')
   , expect = chai.expect
   , chaiHttp = require('chai-http');

  chai.use(chaiHttp);

  // MODELS & COLLECTIONS TEMPLATES GET
  describe('COLLECTIONS TEMPLATES was get: ', function () {
    describe('collection HOME - ', function () {
      // get json
      it('tmpl file was get', function (done) {
        chai.request('http://localhost:3000')
          .get('/scripts/templates/temp_collection_home.html')
          .res(function(res) {
              expect(res).to.have.status(200);
              expect(req).to.be.html;
        });
        done();
      });
    });
    // ... put here more collection get comprobation comprobation...
  });
  describe('MODELS TEMPLATES was get: ', function () {
    describe('model HOME - ', function () {
      // get json
      it('tpml file was get', function (done) {
        chai.request('http://localhost:3000')
          .get('/scripts/templates/temp_item_home.html')
          .res(function(res){
              expect(res).to.have.status(200);
              expect(req).to.be.html;
        });
        done();
      });
    });
    // ... put here more modesl template get comprobation...
  });
})();