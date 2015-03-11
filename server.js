var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
   fs.readFile('testreport.txt',function(err,data){
   res.writeHead(200,{'Content-type':'text/plain'});
   res.end(data);
   });
}).listen(3000,'0.0.0.0');
console.log('Webserver has started');