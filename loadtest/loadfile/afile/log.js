/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-05-06 17:35:00
 * @LastEditors: ymw
 * @LastEditTime: 2021-05-06 17:41:59
 */
console.log('require a log file')
class Log{
    constructor(){
        this.name = "Test Log";

        console.log('construct log class');
    };

    TestFunc() {
        console.log('test log func');
    }
}

module.exports = new Log();