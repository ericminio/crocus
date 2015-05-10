var Starter = require('./support/starter');
var crocus = new Starter();

describe('Crocus', function() {

    it('says its name', function(done) {
        visitor.seesTitle('Crocus', done);
    });

    it('welcomes visitors', function(done) {
        visitor.seesTheQuestion('Has spring begun around you?', done);
    });

    it('gives the visitor a chance to answer', function(done) {
        visitor.seesTheYesButton(done);
    });

    it('displays a map', function(done) {
        visitor.seesAMap(done);
    });

    var visitor;

    beforeEach(function(done) {
        crocus.start({ port: 5000, next: function() {
            visitor = crocus.visitor.visitsHomePage();
            done();
        } });
    });
    afterEach(function() {
        crocus.stop();
    });
});
