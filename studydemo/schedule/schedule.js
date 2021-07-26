/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-05-17 10:34:30
 * @LastEditors: ymw
 * @LastEditTime: 2021-07-01 13:30:26
 */

const ScheduleTool = require('node-schedule');

class MySchedule {
    constructor(){

    }

    test() {
        const  scheduleCronstyle = ()=>{
            //每分钟的第30秒定时执行一次:
            ScheduleTool.scheduleJob('* * * * * *',()=>{
                  console.log('scheduleCronstyle:' + new Date());
              }); 
          }

          scheduleCronstyle();
    }
}

module.exports = new MySchedule();