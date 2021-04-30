/*
 * @Description: CSRF 攻击防御测试
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-04-21 13:31:09
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-29 15:56:31
 */
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');


// create express app
var app = express();
const port = 9999;

//配置ejs视图的目录
//启动视图引擎，并指定模板文件文件类型：html
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// we need this because "cookie" is true in csrfProtection
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(csrf({cookie: true, ignoreMethods: ['GET','HEAD','OPTIONS']}));

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
  let token = req.csrfToken();
  console.log('update token: ' + token);
  res.render('index', {csrfToken: token});
});

router.get('/mydata', function (req, res) {
  // 把生成的csrfToken写入到index.html中去
  res.send('ok');
});

//process submit info
router.post('/process', function (req, res) {
  let showdata = `<!DOCTYPE html> \
  <html>\
  <head>\
  <meta charset="utf-8"> \
  <title>CSRF test</title> \
  </head> \
  <body> \
  <a href="http://192.168.2.54:9999" title="CSRF">Back Home</a> \
  <p>data is being processed</p> \
  </body> \
  </html>`
  // res.send(showdata);
  setTimeout(() => {
    res.send(showdata);
  }, 10);

  console.log(req.body._csrf);
  // console.log(`input1 :${req.body.input1}, input2 : ${req.body.input2}`);
});

app.use(router);

app.listen(port, '192.168.2.54');
console.log('Create server listening ' + port);