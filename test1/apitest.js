const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/size_info', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var name = req.query.good;
    console.log(name);
    if (name.length == 0) {
        res.end('200')
    }
    else { 
        res.send('200') 
    }
});

app.get('/api/size_info1', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var name = req.query.good;
    console.log(name + "-mytest");

    res.end('200');
});

app.post('/api/size_info', function(req, res){
    console.log(req.method);
    console.log(req.body);

    res.end('get post success')
})
app.listen(8081, function () {
    console.log('api listening on 8081')
})
