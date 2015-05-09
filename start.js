var Server = require('./app/lib/server');
var server = new Server({ port: process.env.PORT || 5000 });
server.start(function() {
    console.log('server listening on port ' + server.port + '...');
});
