var soap = require('soap');
// var url = 'http://www.webxml.com.cn/WebServices/MobileCodeWS.asmx?wsdl';
// var args = { mobileCode: '18123456789' };
// var soaptest = function () {
//     soap.createClient(url, function (err, client) {
//         if (client) {
//             client.getMobileCodeInfo(args, function (err, result) {
//                 console.log(JSON.stringify(result));
//                 console.log("end");
//             });    
//         }
//     });
// }
// soaptest();
var url = 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx?wsdl';
var args = { byProvinceName: '陕西' };
soap.createClient(url, function (err, client) {
    client.getSupportCity(args, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(JSON.stringify(result));
        }

        console.log("end");
    });
});