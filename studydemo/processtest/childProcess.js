/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-06-11 14:06:59
 * @LastEditors: ymw
 * @LastEditTime: 2021-06-11 14:40:03
 */
// 子进程
//#!/usr/bin/env node

// for (let i = 0; i < 10000; i++) {
//     process.stdout.write(`${i}`);
// }

process.on('message', (m) => {
    console.log('CHILD got message:', m);
});
process.send({ foo: 'bar' });