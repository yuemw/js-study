// 导入WebSocket模块:
const WebSocket = require('ws');

// 打开一个WebSocket:
let ws = new WebSocket('ws://localhost:3000/test');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

// 响应收到的消息:
ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);

    if(message == 'closews'){
        ws.close();
        console.log("ws is closing");
    }
});

ws.on('close', function () {
    console.log(`ws closed!`);
});