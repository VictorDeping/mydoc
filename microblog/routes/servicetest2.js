var hprose = require('hprose');

function query(name) {
    return 'hello' + this.name;
}

var server = hprose.server.Server.create('tcp://127.0.0.1:8989');
server.add(query);
server.start();