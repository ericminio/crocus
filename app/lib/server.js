function Server() {}
module.exports = Server;

Server.prototype.start = function(port, done) {
    this.server = require('http').createServer(this.route);
    this.server.listen(port, done);
};

Server.prototype.stop = function() {
    this.server.close();
};

Server.prototype.route = function(request, response) {
    response.end();
};
