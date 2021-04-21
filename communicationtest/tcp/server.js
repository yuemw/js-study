/*
 * @Description: tcp server
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-03-25 17:26:37
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-20 11:47:13
 */
const net = require('net');
const server = net.createServer(function(socket){
    console.log('socket connected!');

    socket.on('data', function(chunk){
        chunk = chunk.toString();
        if(chunk === null){
            console.log('chunk is null, seems to end now');
        }
        console.log(`socket get data: ${chunk}`);

        socket.write('Hello World!\r\n');
    });
    socket.on('end', function(){
        console.log('socket end!');
    }).on('close', function(){
        console.log('socket closed!');
    }).on('error', function(err){
        console.log('error : &{err.stack}');
    });
});
server.listen(8008);
console.log('Tcp server is listening 8008');
