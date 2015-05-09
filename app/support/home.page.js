const Browser = require('zombie');
var expect = require('chai').expect;

function HomePage(visitor) {
    this.visitor = visitor;
    this.browser = new Browser();
    this.whenReady = this.browser.visit(this.visitor.urlOf('/'));
};
module.exports = HomePage;

HomePage.prototype.seesTitle = function(expected, done) {
    var page = this;
    page.whenReady.
        then(function() {
            page.browser.assert.text('title', 'Crocus');
        }).
        then(done);
};
