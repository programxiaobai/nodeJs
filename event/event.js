/*
* ÊÂ¼þ
* ¶©ÔÄ·¢²¼
* */
function Person(name) {
    this.name = name;
    this._events = {};
    // this.a = 'a';
    // return {a: 'b'}//p.name
}

// //×¢²á¼àÌý
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
Person.prototype.once = function (eventName, callback) {
    function onceCallBack() {
        callback.apply(this, arguments);
        this.removeListener(eventName, onceCallBack)
    }

    this.on(eventName, onceCallBack);
};

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
var b = function (style, s) {
    console.log(style, s);
};
boy.once('b', b);
boy.emit('boy');
//boy.removeListener('b', b);
boy.emit('b', '1', '2');
// boy.emit('b');


//¿ÉÇ¶Ì×£¬µ«Âé·³
var fs = require('fs');
var person = {};
var eve = new EventEmitter();

eve.on('data', out);

fs.readFile('name.txt', 'utf8', function (err, data) {
    person.name = data;
    eve.emit('data');

});
fs.readFile('age.txt', 'utf8', function (err, data) {
    person.age = data;
    eve.emit('data');
});

function out() {
    if (person.name && person.age) {
        console.log(person.name, person.age);
    }
}



function say(name,word) {
    console.log(name,':',word);
}
// var newSay = say.bind(this,'a');
function newSay() {
    say.apply(null, ['a'].concat(Array.prototype.slice.call(arguments)));
}
newSay('11');

function eat(times,callback) {
    return function () {
        if(times === 1){
            callback();
        }
        times--;
    };
}
var newEat = eat(5, function () {
   console.log('over');
});
newEat();
newEat();
newEat();
newEat();
newEat();