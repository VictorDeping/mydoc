var name;
exports.setName = function (tname) {
    name = tname;
}

exports.sayHello = function () {
    console.log('hello' + name);
}