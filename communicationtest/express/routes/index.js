/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-07-17 21:17:15
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-21 11:11:18
 */
var express = require('express');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('F:/program/js/communicationtest/express/public/html/home.html', function (err, data) {
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

router.post('/changed', function(req, res, next){
  var response = {
      "first_name":req.body.firstname,
      "last_name":req.body.lastname
  };
  console.log(response);
  
  res.send(JSON.stringify(response));
  res.end();
})

router.post('/process', function(req, res, next){
  
  res.send('data is being processed')
  res.end();
})

module.exports = router;
