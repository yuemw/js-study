/*
 * @Description: unit test
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-02-25 18:57:36
 * @LastEditors: ymw
 * @LastEditTime: 2021-03-11 15:38:45
 */

var should = require('should');
var assert = require('assert');
var request = require('supertest');
var test = require("../index.js");
var merge = require("../index.js");


// 简单单元测试
/*
// 当2个参数均为整数时
it("should return 3", function () {
    var sum = test.add(1, 2);
    assert.equal(sum, 3);
});


// 当第2个参数为String时
it("should return undefined", function () {
    var sum = test.add(1, "2");
    assert.equal(sum, undefined);
});

// 当只有1个参数时
it("should return undefined", function () {
    var sum = test.add(1);
    assert.equal(sum, undefined);
});

it("should return 10", function(){
    var sum = test.add("5", "5");
    assert.equal(sum, undefined);
});
*/

//属性测试
/*
it("should success", function () {
    var a = {
        name: "Fundebug",
        type: "SaaS"
    };
    var b = {
        service: "Real time bug monitoring",
        product: {
            frontend: "JavaScript",
            backend: "Node.js",
            mobile: "微信小程序"
        }
    };
    var c = test.merge(a, b);
    c.should.have.property("name", "Fundebug");
    c.should.have.propertyByPath("product", "frontend").equal("JavaScript");
});
// 当只有1个参数时
it("should return undefined", function () {
    var a = {
        name: "Fundebug",
        type: "SaaS"
    };
    var c = test.merge(a);
    (typeof c).should.equal("undefined");
});
*/
//同步测试&&测试组定义
/*
var assert = require("assert");
describe('Array', function () { //only
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
    describe('length', function(){
        it('shoud return length is 3', function(){
            assert.equal(3, [1, 2, 5].length);
        })
    })
});
*/

//异步测试
/*
var fs = require('fs');
describe("#test sync",function(){
	it('test async function',function(done){
	    fs.readFile('./package.json',function(err,data){
	        if(err){
	            done(err)
	        }else{
	            let fun=new Function('return ' + data);
	            let r=fun();
	            assert.strictEqual(r,15);
	            done()
	        }
	    })
	})//异步方法测试
})
*/
