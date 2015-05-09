describe('Crocus', function() {
    var crocus = require('./support/starter');

    it('says its name', function(done) {
        crocus.visitor.visitsHomePage()
                      .seesTitle('Crocus', done);
    });
});
