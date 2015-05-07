var expect = require('chai').expect;

describe('Chai', function() {

    it('can assert', function() {
        expect(1+1).to.equal(2);
    });
});

describe('Sinon', function() {

    var sinon = require('sinon');
    require('chai').use(require('sinon-chai'));

    it('can mock', function() {
        var sut = sinon.spy();
        sut('please');

        expect(sut).to.have.been.calledWith('please');
    });
});

describe('Zombie', function() {

    const Browser = require('zombie');
    var express = require('express');
    var server;
    var port = 5000;
    var home = 'http://localhost:' + port;

    beforeEach(function(done) {
        var application = express();
        application.get('/', function(request, response) {
            response.send('<html><head><title>Ready</title></head><body></body></html>');
        });
        server = require('http').createServer(application);
        server.listen(port, done);
    });

    afterEach(function() {
        server.close();
    });

    it('can assert', function(done) {
        const browser = new Browser();
        browser.visit(home).
            then(function() {
                browser.assert.text('title', 'Ready');
            }).
            then(done, done);
    });
});
