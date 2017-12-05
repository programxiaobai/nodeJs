//HTTP���� B/S��������

var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');//��url���д������ַ���ת���ɶ���/?name=aa&age=6


http.createServer(function (req, res) {
    //������������
    //console.log(req.method);

    //true��ʾqueryת���ɶ���
    var urlObj = url.parse(req.url, true);

    if (urlObj.pathname === '/') {
        // res.statusCode = 200;
        //Content-typeָ����Ӧ���ݵı��������
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

