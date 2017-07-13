// 引入 events 模块的EventEmitter类
var EventEmitter = require('events').EventEmitter;
//实例化一个
var event = new EventEmitter();
//绑定say事件
event.on('say', say)
function say(val) {
    console.log('say:' + val);
}
event.on('eat', eat)
function eat(val) {
    console.log('eat:' + val);
}
//移除所有监听
//event.removeAllListeners();
//触发事件
event.emit('say', '您好！');
event.emit('say', '您好吗！');
event.emit('say', '您好吗！');
event.emit('eat', '吃鱼');
//移除监听eat
//event.removeListener('eat',eat);

event.emit('eat', '吃饭');

var num=EventEmitter.listenerCount(event,'say');
console.log(num)