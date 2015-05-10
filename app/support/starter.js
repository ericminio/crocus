function Starter() {
    this.visitor = {};
};
module.exports = Starter;

var Server = require('../lib/server');
var Visitor = require('./visitor');

Starter.prototype.start = function(options) {
    var the = this;
    the.server = new Server(options);
    the.server.start(function() {
        the.visitor = new Visitor('http://localhost:' + options.port);
        options.next();
    });
};

Starter.prototype.stop = function() {
    this.server.stop();
};
