(function () {
  'use strict';
  var chai = require('chai')
   , expect = chai.expect
   , chaiHttp = require('chai-http');

  chai.use(chaiHttp);

  // CONTROLERS
  describe('CONTROLERS: ', function (){
    // home
    describe('HOME - ', function (){
      // get json
      it('tmpl file was get', function (done){
        chai.request('http://localhost:3000')
          .get('/scripts/templates/temp_collection_home.html')
          .res(function(res){
              expect(res).to.have.status(200);
              expect(req).to.be.html;
        });
        done();
      });
    });
    // ... put here more collection get comprobation comprobation...
  });
})();