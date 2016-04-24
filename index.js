/* eslint-disable */

require('babel/register')({});
require('dotenv').config();

var server = require('./server');
var PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Server on port ', PORT);
});
