import _ from 'lodash';

var module1 = require('./module1.js');
var module2 = require('./module2.js');
module2.str(module1.a);
