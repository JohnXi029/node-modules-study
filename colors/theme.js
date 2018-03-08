/*
 * 自定义colors， 主题
 */

var colors = require('colors');
var colors_safe = require('colors/safe');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: ['red', 'bgBlue']
});

// outputs red text 
console.log("this is an error   1111".error);
 
// outputs yellow text 
console.log("this is a warning   1111".warn);


// =====================================================

colors_safe.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: ['red', 'bgBlue']
});

var error = colors_safe.red;

console.log(error('this is an error  2222'));
 