/*
* module ��ǰģ�����
* exports ��������
* require ����ģ��ķ���
* __dirname ��ǰģ�����ڵ�Ŀ¼�ľ���·��
* __filename ��ǰģ��ľ���·��
* */


function x(module, exports, require, __dirname, __filename) {
    var name = "a";
    exports.name = name;
    console.log(this.name);
    console.trace();//��ʾ��ǰ�ĵ��ö�ջ
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
    console.log('�˳�ǰִ��');
});
// process.kill(1);

process.on('uncaughtException', function (e) {
    console.log('uncaughtException', e.message);
});

process.chdir('..');
console.log(process.cwd());//��ǰ����Ŀ¼
console.log(__dirname);

/*
��ͬ���첽���ȼ���ͬ
* nexttick
* */
console.log('a');
setTimeout(function () {
    console.log('b setTimeout');
}, 0);//�¸�����ͷ��
process.nextTick(function () {
    console.log('b nextTick');
});//��ǰ����β��
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

//���ܴ��Σ���̳�˽������
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

