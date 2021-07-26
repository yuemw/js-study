/*
 * @Description: tcp client
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-03-25 17:26:37
 * @LastEditors: ymw
 * @LastEditTime: 2021-06-11 15:33:14
 */

const net = require('net');
const port = 8989;
const socket = net.connect({port}, '127.0.0.1', function processData(){
    console.log('clinet connected!');
    socket.write('aaaaaaaaaaaaaaaaaa');
    setInterval(() => {
        socket.write('bbbbbbbbbbbbbbbbbb');
    }, 2000)

    socket.on('data', (data) => {
        console.log(data);
    })
    socket.on('end', function(){
        console.log('socket ended');
    });
    socket.on('close', function(){
        console.log('socket closed');
    });
    socket.on('error', function(err){
        console.error('socket error: ${err.stack}');
    });
})
