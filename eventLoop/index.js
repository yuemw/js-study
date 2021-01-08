/*
 * @Author: minwei.yue 
 * @Date: 2020-12-15 17:19:41 
 * @Last Modified by: minwei.yue
 * @Last Modified time: 2020-12-19 18:11:35
 */

var catchTest = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('aa');
    }, 1000);
})

catchTest.then(function (value) {
        console.log('a');
    })
    .then(function (value) {
        // throw new Error('test');
        console.log('b');
    })
    .then(function (value) {
        console.log('c');
    })
    .catch(function (error) {
        console.log(error);
    })

//a
//[Error: test]


// require('./eventStudy');