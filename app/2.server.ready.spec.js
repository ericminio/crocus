var request = require('request');
var expect = require('chai').expect;

describe('Server', function() {

    var port = 5000;
    var home = 'http://localhost:' + port;

    it('answers', function(done) {
        request(home, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    var Server = require('./lib/server');
    var server;

    beforeEach(function(done) {
        server = new Server();
        server.start(port, done);
    });

    afterEach(function() {
        server.stop();
    });

});
