/*var Hello = require('./hello1/index2');
//person = new Hello();
Hello.setName('ludeping');
Hello.sayHello();*/

/*console.log(process.stdout);
console.log(process.stdin);*/
/*process.stdout.write('hello');*/
var util = require('util');
function hello() {
    this.name = 'hello';
    this.age = 33;
    this.sayHello = function () {
        console.log(this.name + this.age)
    }
}

hello.prototype.sayhi = function () {
    console.log('prototype');
}
hello.prototype.name1 = 'hello1222';

function hello1() {
    
}

util.inherits(sub,base);

var hello001 = new hello1();


console.log(hello001.name1);