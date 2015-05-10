var Starter = require('./support/starter');
var crocus = new Starter();
var expect = require('chai').expect;
const Browser = require('zombie');

describe('Current position', function() {

    it('is saved when the visitor answers yes', function(done) {
        var browser = new Browser();
        browser.visit('http://localhost:5000')
               .then(function() {
                   browser.window.navigator.geolocation = {};
                   browser.window.navigator.geolocation.getCurrentPosition = function(callback) {
                       callback({ coords: {
                           latitude: 12.26,
                           longitude: 23.18
                       }});
                   };
               })
               .then(function() {
                   browser.fire('#yes', 'mouseup');
               })
               .then(function() {
                   expect(browser.document.position).to.deep.equal({ latitude: 12.26, longitude: 23.18 });
               })
               .then(function() {
                   var marker = browser.document.marker;
                   expect(marker).not.to.equal(undefined);
                   expect(marker.visible).to.equal(true);
                   expect(marker.position.A - 12.26).to.be.below(0.0001);
                   expect(marker.position.F - 23.18).to.be.below(0.0001);
               })
               .then(done, done);
    });

    var visitor;

    beforeEach(function(done) {
        crocus.start({ port: 5000, next: done });
    });
    afterEach(function() {
        crocus.stop();
    });
});
