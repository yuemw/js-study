/*
 * @Description: tcp server
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-03-25 17:26:37
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-12 16:01:17
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
