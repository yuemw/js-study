/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ymw
 * @Date: 2021-04-12 16:02:16
 * @LastEditors: ymw
 * @LastEditTime: 2021-04-12 16:33:36
 */
var protobuf = require('protobufjs');

protobuf.load("./protobuffer/my.message.proto", function(err, root) {
    if (err)
        throw err;

    // Obtain a message type
    var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

    // Exemplary payload
    var payload = { awesomeField: "AwesomeString" };

    // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
    var errMsg = AwesomeMessage.verify(payload);
    if (errMsg)
        throw Error(errMsg);

    // Create a new message
    var message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = AwesomeMessage.encode(message).finish();
    // ... do something with buffer

    // Decode an Uint8Array (browser) or Buffer (node) to a message
    var message = AwesomeMessage.decode(buffer);
    // ... do something with message

    // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

    // Maybe convert the message back to a plain object
    var object = AwesomeMessage.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
        // see ConversionOptions
    });
    console.log(object);


    let ymwMsg =root.lookupType('awesomepackage.Yuemw');
    payload = { id: 001,
                name: "yueminwei" 
            };
    var errMsg = ymwMsg.verify(payload);
    if (errMsg)
        throw Error(errMsg);
        
    message = ymwMsg.create(payload);
    object = ymwMsg.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
        // see ConversionOptions
    });
    console.log(object);

});

