/*
 * @Description: Nodejs demo test
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-03-25 17:26:25
 * @LastEditors: ymw
 * @LastEditTime: 2021-07-15 11:50:51
 */

const { clearInterval } = require("timers");

// require('./protobuffer/payload');

// var DataRange2 = require('./classtest')
// let obj = new DataRange2();
// let obj1 = new DataRange2();

// console.log('id is :' + obj.getID());

// require('./threadworker/mutiThread');

// const easyMonitor = require('easy-monitor');
// easyMonitor('ymw monitor01');

// require('./processtest/mainProcess')

// let schedule = require('./schedule/schedule');
// schedule.test();

// global.gc();

// let fs = require('fs');
// let pathstr = 'C:/Users/Lenovo/Desktop/配置文件损坏导致计算组态和数据源组态打不开问题复现/14：24/kingfusion3.6/kingdevopscenter3.6/exe/kingcalculation/config/externalConfig.json';
// let data1 =  fs.readFileSync(pathstr, 'utf8');

require('./filewatcher/filewatcher')


console.log('data')