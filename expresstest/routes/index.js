/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-07-17 21:17:15
 * @LastEditors: lhl
 * @LastEditTime: 2021-02-24 18:38:50
 */
var express = require('express');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('F:/program/js/expresstest/public/html/home.html', function (err, data) {
    if (err) {
       console.log(err)
       res.writeHead(404, {'Content-Type': 'text/html'});
    }else{             
       res.writeHead(200, {'Content-Type': 'text/html'});    
       // 响应文件内容
       res.write(data.toString());        
    }
    //  发送响应数据
    res.end();
  }); 
  // res.render('index', { title: 'Express' });
});

module.exports = router;
