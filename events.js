var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function (argv1,argv2) {
    console.log('Listener1:'+argv1+argv2)
});

emitter.emit('someEvent','ludeping','hello');