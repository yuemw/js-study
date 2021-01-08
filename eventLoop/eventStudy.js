/*
 * @Author: minwei.yue 
 * @Date: 2020-12-15 17:19:41 
 * @Last Modified by: minwei.yue
 * @Last Modified time: 2020-12-17 15:26:40
 */

 // 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
 
// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}
 
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});
 
// 触发 connection 事件 
eventEmitter.emit('connection');
console.log("程序执行完毕。");



// setTimeout(() => {
// console.log('timeout');
// }, 0);

// setImmediate(() => {
// console.log('immediate');
// });

// const fs = require('fs');

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('immediate');
//   });
// });