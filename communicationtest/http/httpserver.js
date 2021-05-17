/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2020-07-17 11:09:07
 * @LastEditors: ymw
 * @LastEditTime: 2021-05-12 11:46:00
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
const querystring = require("querystring");
let port = 8088;

const htmlInfo = '<!DOCTYPE html> \
<html>\
<head>\
<meta charset="utf-8">\
<title>Http test</title>\
</head>\
<body>\
    <h1>NO CSRF</h1>\
    <form action="/haha" method="POST">\
        First name: <input type="text" name="firstname"><br>\
        Last name: <input type="text" name="lastname"><br>\
        <input type="radio" name="sex" value="male">man\
        <input type="radio" name="sex" value="female">woman4<br>\
        <input type="submit" name="submit" value="test">\
    </form>\
</body>\
</html>';

// 创建服务器
http.createServer(function (req, res) {
   // 解析请求，包括文件名
   var pathname = url.parse(req.url).pathname;
   // console.log("req for " + pathname + " received.");

   // if(req.url !== "/favicon.ico"){
   //    req.on('data',function(data){
   //       console.log("服务器接收到的数据：　"+decodeURIComponent(data));
   //    });
   // }

   // req.on("end",function(){
   //    console.log('客户端请求数据全部接收完毕');
   // });

   if(req.method === 'GET')
   {
      if(pathname === '/'){
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(htmlInfo);
         res.end();
      }
   }

   if (req.method === 'POST'){
      let buffers = [];
      req.on("data", data => buffers.push(data));
      req.on("end", () => {
         // 合并数据并设置默认响应头和返回数据
         let data = Buffer.concat(buffers).toString();
         let info = data.split('&');
         console.log(info[0], info[1]);

         res.setHeader("Content-Type", "application/json");
         res.end(info[0] + info[1]);
      });
   };
}).listen(port, () => {
   console.log(`Server running at http://127.0.0.1:${port}/`)
})
