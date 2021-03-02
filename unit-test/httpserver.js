/*
 * @Description: http 服务
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-03-02 11:15:39
 * @LastEditors: ymw
 * @LastEditTime: 2021-03-02 16:18:30
 */

// http test
/*
var http = require("http");
var server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Hello World");
});
server.listen(8000);

module.exports = server;
*/



// express test
const express = require('express')
const app = new express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({
    limit: '1mb'
})); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

app.get("/", function (req, res) {
    console.log('get data' );
    console.log(req.query);
    res.send({
        msg: "Hello world"
    });
});
app.post("/send", function (req, res) {
    let body = req.body;
    console.log('post recieve');
    console.log(body);
    res.send({
        encode: body.name
    })
})

module.exports = app;