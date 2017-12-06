/*
* module 当前模块对象
* exports 导出对象
* require 加载模块的方法
* __dirname 当前模块所在的目录的绝对路径
* __filename 当前模块的绝对路径
* */


function x(module, exports, require, __dirname, __filename) {
    var name = "a";
    exports.name = name;
    console.log(this.name);
    console.trace();//显示当前的调用堆栈
}

// console.log(global);

process.stdout.write('hello');
process.stdin.on('data', function (data) {
    console.log(data.toString());
});

process.argv.forEach(function (val, index, array) {
    console.log(val, index, array);
});

process.on('exit', function () {
    console.log('退出前执行');
});
// process.kill(1);

process.on('uncaughtException', function (e) {
    console.log('uncaughtException', e.message);
});

process.chdir('..');
console.log(process.cwd());//当前工作目录
console.log(__dirname);

/*
不同的异步优先级不同
* nexttick
* */
console.log('a');
setTimeout(function () {
    console.log('b setTimeout');
}, 0);//下个队列头部
process.nextTick(function () {
    console.log('b nextTick');
});//当前队列尾部
console.log('c');
//while(1){}

/*
* util
* inherits
* inspect
* */
var util = require("util");
function Parent() {
    this.name = 'parent';
    this.age = 6;
    this.say = function () {
        console.log('hello', this.name);
    }
}

Parent.prototype.showName = function () {
    console.log(this.name);
};

function Child() {
    this.name = 'child';
}

//不能传参，会继承私有属性
//Child.prototype = new Parent();
//Child.prototype = Object.create(Parent.prototype);
util.inherits(Child, Parent);

var child = new Child();
child.showName();
console.log(child.__proto__.__proto__.__proto__ === Object.prototype);


var str1 = [1,2];
var str2 = [3,4];
console.log(str1.concat(str2));
// str1.push(str2);
// console.log(str1);//[ 1, 2, [ 3, 4 ] ]
Array.prototype.push.apply(str1, str2);
console.log(str1);

