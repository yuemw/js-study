/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2021-02-25 18:54:02
 * @LastEditors: ymw
 * @LastEditTime: 2021-03-02 15:48:04
 */
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return undefined;
    }
}

function merge(a, b)
{
    if (typeof a === "object" && typeof b === "object")
    {
        for (var property in b)
        {
            a[property] = b[property];
        }
        return a;
    }
    else
    {
        return undefined;
    }
}

exports.add = add;
exports.merge = merge;