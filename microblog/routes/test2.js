var hprose = require('hprose');


/*var ip = '192.168.1.21';
var port = '9510';
var client = hprose.client.Client.create("tcp://" + ip + ":" + port, ['query'], false);

var sql = "select * from test";
client.query(sql, function (result) {
    console.log(result);
});*/

/*
var ip = '192.168.1.9';
var port = '10000';
var client = hprose.client.Client.create("tcp://" + ip + ":" + port, ['query'], false);

var sql = "select * from admin";
client.query(sql, function (result) {
    console.log(result);
});*/

var ip = '127.0.0.1';
var port = '8989';
var client = hprose.client.Client.create("tcp://" + ip + ":" + port, ['query'], false);

var sql = "select * from admin";
client.query(sql, function (result) {
    console.log(result);
    client.query(sql,function (res) {
        console.log(res);
    });
});