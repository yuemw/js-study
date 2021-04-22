/*
 * @Description: CSRF 攻击防御测试
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-04-21 13:31:09
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-22 16:38:25
 */
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');

// create express app
var app = express();
const port = 9999;

//配置ejs视图的目录
//启动视图引擎，并指定模板文件文件类型：html
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// we need this because "cookie" is true in csrfProtection
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(csrf({
  cookie: true
}));

app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN')
    return next(err);

  // handle CSRF token errors here
  res.status(403);
  res.send('form tampered with');
})

//router process
var router = new express.Router();
router.get('/', function (req, res) {
  // 把生成的csrfToken写入到index.html中去
  res.render('index', {
    csrfToken: req.csrfToken()
  })
});

// router.get('/', function(req, res){
//   console.log('req has csrf token' + req.csrfToken());

//   fs.readFile('F:/program/js/csrftest/abc.html', function (err, data) {
//     if (err) {
//        console.log(err);
//        res.writeHead(404, {'Content-Type': 'text/html'});
//     }else{             
//        res.writeHead(200, {'Content-Type': 'text/html'});    
//        // 响应文件内容
//        res.write(data.toString());        
//     }
//     res.locals.csrfToken = req.csrfToken ? req.csrfToken() : '';
//     res.end();
//   });
// })

router.get('/form', function (req, res) {
  // pass the csrfToken to the view
  console.log(req.csrfToken());
  // res.send(req.csrfToken());
  res.render('form', {
    csrfToken: req.csrfToken()
  });
})

router.post('/process', function (req, res) {
  res.send('data is being processed');
  console.log('post cmd csrf token :' + req.csrfToken());
});

app.use(router);

app.listen(port);
console.log('Create server listening ' + port);