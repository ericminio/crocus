describe('Crocus', function() {
    var crocus = require('./support/starter');
    var visitor;

    beforeEach(function() {
        visitor = crocus.visitor.visitsHomePage();
    });

    it('says its name', function(done) {
        visitor.seesTitle('Crocus', done);
    });

    it('welcomes visitors', function(done) {
        visitor.seesTheQuestion('Has spring begun around you?', done);
    });

    it('displays a map', function(done) {
        visitor.seesAMap(done);
    });
});
