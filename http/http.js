//HTTP请求 B/S交互过程

var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');//对url进行处理，把字符串转换成对象/?name=aa&age=6


http.createServer(function (req, res) {
    //设置请求属性
    //console.log(req.method);

    //true表示query转换成对象
    var urlObj = url.parse(req.url, true);

    if (urlObj.pathname === '/') {
        // res.statusCode = 200;
        //Content-type指定响应内容的编码和类型
        res.setHeader('Content-type', 'text/html;charset=utf-8');
        res.setHeader('name', 'a');
        console.log(req.headers);
        fs.readFile('1.html', function (err, data) {
            res.write(data);
            res.end();
        });
        // static(url, res);
    } else if (urlObj.pathname === '/1.css') {
        static(urlObj.pathname, res);
    } else if (urlObj.pathname === '/1.js') {
        static(urlObj.pathname, res);
    }

    function static(url, res) {
        // res.statusCode = 200;
        res.setHeader('Content-type', mime.getType(url) + ';charset=utf-8');
        res.setHeader('name', 'a');
        // console.log(req.headers);
        fs.readFile(url.slice(1), function (err, data) {
            res.write(data);
            res.end();
        });
    }

    // res.write(new Date().toString());
    // res.end();
}).listen(8080, "localhost");

