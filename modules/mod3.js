var randNum = require('./mod1');
var conversion = require('./mod2');

var balance = "Account balance: ";
var randMoney = conversion(randNum(100, 100000));

// console.log(conversion(randMoney));

module.exports.randMoney = randMoney;
module.exports.balance = balance;
