/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-06-11 14:06:43
 * @LastEditors: ymw
 * @LastEditTime: 2021-06-11 15:44:11
 */

// *********************execfile*************************/
// try {
//     const execFile = require('child_process').execFile;

//     const child = execFile('node', ['F:/program/js/studydemo/processtest/childProcess.js'], (err, stdout, stderr) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);
//     });
    
//     console.log('用户事务处理');
// } catch (error) {
//     console.log(error);
// }

// *********************exec*************************/
// var exec = require('child_process').exec;

// exec('dir', function(error, stdout, stderr){
//     if(error) {
//         console.error('error: ' + error);
//         return;
//     }
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + typeof stderr);
// });

// *************fork******************/
// const cp = require('child_process');
// const child = cp.fork(`${__dirname}/childProcess.js`);

// child.on('message', (m) => {
//     console.log('PARENT got message:', m);
// });

// child.send({ hello: 'world' });

// *************cluster******************/
// const cluster = require('cluster');

// if (cluster.isMaster) {
//     const cpuNum = require('os').cpus().length;
//     for (let i = 0; i < cpuNum; ++i) {
//         cluster.fork();
//     }

//     cluster.on('online', (worker) => {
//         console.log('Create worker-' + worker.process.pid);
//     });

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(
//             '[Master] worker ' +
//                 worker.process.pid +
//                 ' died with code:' +
//                 code +
//                 ', and' +
//                 signal
//         );
//         cluster.fork(); // 重启子进程
//     });
// } else {
//     const net = require('net');
//     const server = net.createServer(function(socket){
//         console.log('socket connected!');
    
//         socket.on('data', function(chunk){
//             chunk = chunk.toString();
//             // console.log(chunk);
            
//         });
//         socket.on('end', function(){
//             console.log('socket end!');
//         });
//     }).on('connection', (socket) => {
//         console.log('client connect server')
//         setTimeout(() => {
//             socket.write('Request handled by worker-' + process.pid);
//             console.log('process id = ' + process.pid)
//         }, 10);
//     });
    
//     server.listen(8989)
// }

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // 衍生工作进程。
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是 HTTP 服务器。
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('你好世界\n');

    console.log('process id = ' + process.pid)
  }).listen(8000);

  console.log(`工作进程 ${process.pid} 已启动`);
}