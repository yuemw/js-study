/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-04-12 16:16:39
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-12 16:24:30
 */

let payload = require("protobufjs").newBuilder({})['import']({
    "package": "lm",
    "messages": [
        {
            "name": "helloworld",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "str",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "opt",
                    "id": 3
                }
            ]
        }
    ]
}).build();

module.exports = 