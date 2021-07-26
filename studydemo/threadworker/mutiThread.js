/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-06-09 19:17:26
 * @LastEditors: ymw
 * @LastEditTime: 2021-06-28 19:32:26
 */

const {
    isMainThread,
    parentPort,
    threadId,
    MessageChannel,
    Worker
} = require('worker_threads');

//********** 双线程通信 *****************************/
try {
    if (isMainThread) {
        const worker1 = createWorker(__filename);
        // const worker2 = createWorker('F:/program/js/studydemo/threadworker/worker1.js');
        const {
            port1,
            port2
        } = new MessageChannel();

        worker1.postMessage({
            port1
        }, [port1]);
        // worker2.postMessage({ port2 }, [port2]);

        setInterval(function () {
            worker1.postMessage('hello child 1');
        }, 3000);

    } else {
        //worker1
        parentPort.on('message', (value) => {
            if (value.port1 !== undefined) {
                value.port1.postMessage('hello');
                value.port1.on('message', msg => {
                    console.log(`thread ${threadId}: receive ${msg}`);
                });
            } else {
                // let a = tmp -5;
                console.log('get main thread msg : ' + value);
                parentPort.postMessage('work1 send');
            }
        });

    }

    function createWorker(filaPath) {
        const worker = new Worker(filaPath);
        worker.on('exit', code => {
            console.log(`main: worker stopped with exit code ${code}`);
        });
        worker.on('message', msg => {
            console.log(`main: receive ${msg}`);
            // worker.postMessage(msg + 1);
        });

        return worker;
    }
} catch (error) {
    console.log(error);
}

// ******************主、子线程通信******************/
// if (isMainThread) {
//     const worker = new Worker(__filename);
//     worker.postMessage('this is main msg');
//     worker.on('message', msg => {
//         console.log(msg);
//     })
// } else {
//     parentPort.on('message', msg => {
//         console.log(msg)
//     });

//     setTimeout(() => {
//         parentPort.postMessage('this is child');

//     }, 1000);
// }

// **************主、子线程 port通信********************/
// const assert = require('assert');

// if (isMainThread) {
//   const worker = new Worker(__filename);
//   const {port1, port2} = new MessageChannel();

//   worker.postMessage({port1}, [port1]);

//   port2.on('message', (value) => {
//     console.log('接收到:', value);
//   });

//   port2.postMessage('hello child')
// } else {
//   parentPort.on('message', ({port1}) => {
//     setTimeout(function(){
//         port1.postMessage('工作线程正在发送此消息');
//     }, 1000)

//     port1.on('message', (msg) => {
//         console.log('child revcieve: ' + msg);
//         port1.postMessage('hello father')
//     })
//     // value.hereIsYourPort.close();
//   });
// }