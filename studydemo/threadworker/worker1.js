/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-06-10 17:26:52
 * @LastEditors: ymw
 * @LastEditTime: 2021-06-10 18:09:00
 */
const {
    parentPort,
    threadId
} = require('worker_threads');

parentPort.on('message',({port2}) => {
    port2.postMessage('form worker2');
    port2.on('message',(msg) => {
        console.log(`thread ${threadId}: receive ${msg}`);
    })
})