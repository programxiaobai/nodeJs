var http = require('http/http');


http.createServer(function (req, res) {
    //设置请求属性
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    //设置响应属性
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.setHeader('name', 'a');
    //res.write(new Date().toString());
    res.end();
}).listen(8080, "localhost");

