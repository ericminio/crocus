function Server(options) { this.port = options.port; }
module.exports = Server;

Server.prototype.start = function(done) {
    this.server = require('http').createServer(this.route);
    this.server.listen(this.port, done);
};

Server.prototype.stop = function() {
    this.server.close();
};

Server.prototype.route = function(request, response) {
    var content = require('fs').readFileSync('./app/lib/index.html').toString();
    response.write(content);
    response.end();
};
