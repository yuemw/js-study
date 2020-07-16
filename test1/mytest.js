var http = require('http');
var options = {
    hostname : 'www.taobao.com',
    port : 80,
    path : '/',
    method: 'GET'
};
var req = http.request(options, function(res){
    console.log('状态码：' + res.statusCode);
    console.log('响应头：' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('相应内容：' + chunk);
    })
});
req.end();

    
//   var Ninja = Person.subClass({  
//    init : function() {   
    
//      this._super(false);  
//    },  
//    dacne : function() {  
//      // call hte inherited version of the dance()   
//      return this._super();  
//    },  
//    swingSword: function() {  
//      return true;   
//    }  
//   });  
    
//   var n = new Ninja();  
    
//   assert(n.swingSword(), "Get true, as we expected");  
//   assert(!n.dance(), "The inverse of the super method's value - false.");  
    
  // Should all be true   
  //assert(p instanceof Person && n instance Ninja && n instanceof Person, "the objects inherit functionalities from the correct sources.");  