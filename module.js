/*
var name;
exports.setName = function (tname) {
    name = tname;
}

exports.sayHello = function () {
    console.log('hello' + name);
}
*/


function Hello() {
    var mame;
    this.setName = function (tname) {
        name = tname;
    }
    this.sayHello = function () {
        console.log('hello' + name);
    }
}

module.exports = Hello;