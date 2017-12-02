var http = require('http');
var fs = require('fs');
var mime = require('mime');


http.createServer(function (req, res) {
    //…Ë÷√«Î«Û Ù–‘
    console.log(req.method);
    var url = req.url;
    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html;charset=utf-8');
        res.setHeader('name', 'a');
        console.log(req.headers);
        fs.readFile('http/1.html', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (url === '/1.css') {
        res.setHeader('Content-type', 'text/css;charset=utf-8');
        res.setHeader('name', 'a');
        console.log(req.headers);
        fs.readFile('http/1.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (url === '/1.js') {
        // res.setHeader('Content-type', 'application/x-javascript;charset=utf-8');
        // res.setHeader('name', 'a');
        // console.log(req.headers);
        // fs.readFile('http/1.js', function (err, data) {
        //     res.write(data);
        //     res.end();
        // });
        static(url, res);
    }

    function static(url, res) {
        res.statusCode = 200;
        res.setHeader('Content-type', mime.getType(url) + ';charset=utf-8');
        res.setHeader('name', 'a');
        console.log(req.headers);
        fs.readFile('http/' + url.slice(1), function (err, data) {
            res.write(data);
            res.end();
        });
    }

    // res.write(new Date().toString());
    // res.end();
}).listen(8080, "localhost");

