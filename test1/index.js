//test  
//gui test
// require('./oracletest');
// require('./csv/csvtest');

const { promises } = require("fs");

// var set = new Set();  
// set.add("a").add("b").add("d").add("c");  
// var map = new Map();  
// map.set("a",1).set("b",2).set(999,3);  
// for (let v of set) {  
//     console.log(v);  
// }  
// console.log("--------------------");  
// for(let [k,v] of map) {  
//     console.log(k,v);  
// }


// console.log(data1.toLocaleUpperCase())

// var A = {a:1,b:2,c:3,d:"hello world"};  
// for(let k in A) {  
//     console.log(k,A[k]);  
// } 
// var array = [11,22,33,44,55,66,77];  
// for (var i = 0; i < array.length; i++) {  
//     console.log(i,array[i]);  
// }  
// for (const index in array) {
//     if (array.hasOwnProperty(index)) {
//         const element = array[index];
//         console.log(element);  
//     }
// }
// for (const iterator of array) {
//     console.log(iterator);
// }
// array.forEach((element, index) => {
//     console.log(`element: ${element}, index :${index}`); 
// });


// const person1 = {
//     fname: "san",
//     lname: "zhang",
//     age: 29
// };
// let info;
// for(info in person1) {
//     console.log("person[" + info + "] = " + person1[info]);
// }


async function test(ctx, next) {
    var pro = new Promise();
    await doThing().then(console.log('exec'));
    doAnotherThing();
    console.log('this way');
}

async function doThing() {
    
    await doA();
    await doB();
    console.log('do do do thing');
}

function doAnotherThing() {
    console.log('do another thing')
}

async function doA() {
    console.log(' A');
    return new Promise(resove => {
        setTimeout(() => {
            console.log('done A')
            resove();
        }, 1000)
    })
}

async function doB() {
    console.log(' B');
    return new Promise(resove => {
        setTimeout(() => {
            console.log('done B')
            resove();
        }, 100)
    })
}

test();