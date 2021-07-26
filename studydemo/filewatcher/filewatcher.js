/*
 * @Description: watcher
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-07-15 11:47:56
 * @LastEditors: ymw
 * @LastEditTime: 2021-07-15 16:37:50
 */
const fs = require('fs');
const filePath = 'F:/program/js/studydemo/filewatcher'    
console.log(`正在监听 ${filePath}`);
fs.watch(filePath,(event,filename)=>{

    if (filename && event == 'change') {
        let date = new Date();
        console.log(`Time:${date.toString()}, ${filename}文件发生更新`)

    }
})


//*************************file watcher 1 *************************/
// var chokidar = require('chokidar');
// var watcher = null
// var ready = false

// function WatchFile () {

//   // 文件新增时
//   function addFileListener(path_) {
//     if (ready) {
//       console.log('File', path_, 'has been added');
//     }
//   }
//   function addDirecotryListener(path) {
//     if (ready) {
//       console.log('Directory', path, 'has been added');
//     }
//   }

//   // 文件内容改变时
//   function fileChangeListener(path_) {
//     let date = new Date()
//     console.log('File', path_, 'has been changed', date.toTimeString());
//   }

//   // 删除文件时，需要把文件里所有的用例删掉
//   function fileRemovedListener(path_) {
//       console.log('File', path_, 'has been removed');
//   }

//   // 删除目录时
//   function directoryRemovedListener(path) {
//     log.info('Directory', path, 'has been removed');
//   }

//   if (!watcher) {
//     watcher = chokidar.watch('F:/program/js/studydemo/filewatcher');
//   }
//   watcher
//     .on('add', addFileListener)
//     .on('addDir', addDirecotryListener)
//     .on('change', fileChangeListener)
//     .on('unlink', fileRemovedListener)
//     .on('unlinkDir', directoryRemovedListener)
//     .on('error', function (error) {
//       log.info('Error happened', error);
//     })
//     .on('ready', function () {
//       console.info('Initial scan complete. Ready for changes.');
//       ready = true;
//     })
// }

// WatchFile();

