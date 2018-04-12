var http = require('http');
var util = require('util');
var url = require('url');
var queryString = require('querystring');

/*
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);*/
/*ar contents = queryString.stringify({name: 'hello', age: 33})
var options = {
    host: 'nodejs.com',
    path: '/test/test8',
    method: 'get',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Contnd-Length': contents.length
    }
};
var req = http.request(options, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        console.log(data);
    })
})*/


var req = http.get({host: 'www.baidu.com'}, function (data) {
    console.log(data);
});

req.end();
/*
http.createServer(function (req, res) {
    var req = http.get({host:'www.baidu.com'},function (data) {

    });
    res.writeHead(200,{'Content-type': 'text/plain'});
    res.write(util.inspect(req));
    res.end();
}).listen(3000);*/
