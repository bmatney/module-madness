var myBalance = require('./modules/mod3');
var http = require('http');
var portDecision = 3000;

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(myBalance.balance + "\n" + myBalance.randMoney);
  res.end();
}).listen(portDecision);

console.log(myBalance.randMoney);
