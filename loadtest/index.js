/*
 * @Description: nodejs require加载测试
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-05-06 15:31:59
 * @LastEditors: ymw
 * @LastEditTime: 2021-05-07 13:48:29
 */
globalThis.__dir = __dirname;
const load = require('./loadfile')
console.log(load);
