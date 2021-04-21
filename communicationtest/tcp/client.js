/*
 * @Description: tcp client
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-03-25 17:26:37
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-20 11:47:46
 */

const net = require('net');
const port = 8008;
const socket = net.connect({port}, '192.168.3.18', function processData(){
    console.log('clinet connected!');
    socket.write('aaaaaaaaaaaaaaaaaa');
    socket.write('bbbbbbbbbbbbbbbbbb');

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
