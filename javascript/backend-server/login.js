var extend = require('./extend');
var request = require('./request');

var login = function () {

};
console.log(extend);
login = extend(login, request);
console.log(login);