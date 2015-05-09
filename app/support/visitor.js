var HomePage = require('./home.page');

function Visitor(home) {
    this.home = home;
};
module.exports = Visitor;

Visitor.prototype.visitsHomePage = function(next) {
    return new HomePage(this);
};

Visitor.prototype.urlOf = function(resource) {
    return this.home + resource;
};
