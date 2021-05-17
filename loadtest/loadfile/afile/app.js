/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-05-06 15:32:35
 * @LastEditors: ymw
 * @LastEditTime: 2021-05-06 17:51:54
 */
console.log('require a app file')
class App{
    constructor(){
        this.name = "Test App";

        console.log('construct App class');
    }

    TestFunc() {
        console.log('test app func');
    }
}

module.exports = new App();