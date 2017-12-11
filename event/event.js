/*
* 事件
* 订阅发布
* */
function Person(name) {
    this.name = name;
    this._events = {};
    // this.a = 'a';
    // return {a: 'b'}//p.name
}

// //注册监听
// Person.prototype.on = function (eventName, callback) {
//     if (this._events[eventName]) {
//         this._events[eventName].push(callback);
//     } else {
//         this._events[eventName] = [callback];
//     }
// };
//
// Person.prototype.emit = function (eventName) {
//     var args = Array.prototype.slice.call(arguments, 1);
//     var callbacks = this._events[eventName];
//     var self = this;
//     callbacks.forEach(function (callback) {
//         //this->global
//         callback.apply(self, args);
//     })
//
// };
// var girl = new Person;
// girl.on('a', function () {
//     console.log('a');
// });
// girl.on('a', function () {
//     console.log('b');
// });
// girl.emit('a');


var EventEmitter = require('events');
var util = require('util');
util.inherits(Person, EventEmitter);

var boy = new Person('boy');
boy.on('boy', function () {
    console.log('boy1');
});
boy.addListener('boy', function () {
    console.log('boy2');
});
var b = function () {
    console.log('boy3');
};
boy.once('b', b);
boy.emit('boy');
boy.removeListener('b', b);
boy.emit('b');
boy.emit('b');



