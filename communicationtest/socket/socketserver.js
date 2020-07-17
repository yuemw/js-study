// server
var net = require('net');

var server = net.createServer(function(socket){
    socket.on('data', function(data){
        console.log("rec client :" + data);
        // socket.write('transfer');
    });
    socket.on('end', function(data){
        console.log('cut off');
    });
    socket.write('test');

    setTimeout(function(){
        socket.write("close conn");
    }, 2000);
});
server.listen('10496', function(){
    console.log('server bound');
});
