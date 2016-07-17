const isUpperCase = require('./isUpperCase');

module.exports = name => isUpperCase(name, 0) && isUpperCase(name, 1);
