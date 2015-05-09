describe('Crocus', function() {
    var crocus = require('./support/starter');

    it('says its name', function(done) {
        crocus.visitor.goToHomePage()
                      .seesTitle('Crocus', done);
    });
});
