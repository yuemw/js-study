/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-05-06 15:32:11
 * @LastEditors: ymw
 * @LastEditTime: 2021-05-06 18:01:07
 */

console.log('require load file')

try {
    var obj = require('./afile');
    console.log(obj);
} catch (error) {
    console.log(error);
}

// require('./bfile/index')

module.exports = {
    'get':{
        'testa': obj.app.TestFunc,
        'testb': obj.log.TestFunc,
        'info': 'this is root info'
    },
    'data':{
        'name':'ymw',
        'id':1122
    }
}

