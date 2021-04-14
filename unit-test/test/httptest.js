/*
 * @Description: http单元测试
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-03-02 11:15:04
 * @LastEditors: ymw
 * @LastEditTime: 2021-03-11 15:41:25
 */

var request = require("supertest");
var app = require("../httpserver.js");
var assert = require("assert");

/*
//http test
it("should return Hello World", function(done)
{
    request(app)
        .get("/")
        .expect(200)
        .expect(function(res)
        {
            assert.equal(res.text, "Hello World");
        })
        .end(done);
});
*/

//express test
describe("#test express app",function(){//http测试
    let server;
    before(function() {//执行测试用例前开启服务器
        // runs before all tests in this block
        server=app.listen(9999);
    });
    
    after(function() {//执行完后关闭服务器监听
    // runs after all tests in this block
        server.close();
    });

    beforeEach(function() {
    // runs before each test in this block
    });

    afterEach(function() {
    // runs after each test in this block
    });
    describe('#test server',function(){
        it('#test get /',function(done){
            request(server)
                .get('/')
                .query({n:1})
                .expect(200,function(err,res){
                if(err){
                    console.log(err);
                    done(err);
                }else{
                    console.log('get test');
                    console.log(res.body);
                    done();
                }
            })
        });
        it('#test post /send',function(done){
            request(server)
                .post("/send")
                .send({name:"yueminwei"})
                .expect(200,function(err,res){
                    if(err){
                        console.log(err);
                        done(err);
                    }else{
                        console.log('post test');
                        console.log(res.body);
                        done();
                    }
                })
        })
    })
})


// var express = require('express');
// var app = express();

// app.get('/user', function(req, res){
//   res.send(200, { name: 'tobi' });
// });

// describe("my test", function(){
//     let server;
//     before(function() {//执行测试用例前开启服务器
//         // runs before all tests in this block
//         server=app.listen(9999);
//     });
    
//     after(function() {//执行完后关闭服务器监听
//     // runs after all tests in this block
//         server.close();
//     });
    
//     it("data test", function(done){
//         request(server)
//         .get('/user')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end(function(err, res){
//           if (err) {
//               done(err);
//             }else{
//                 done();
//             }
//         });
//     })
// })
