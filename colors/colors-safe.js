/*
 * 不继承 String.prototype 的用法
 */
 
var colors = require('colors/safe');

console.log(colors.green('westwall'));
console.log(colors.rainbow('westwall'));


console.log("==== string substitution ====");
var name = 'Marak';
console.log(colors.red('Hello %s'), name);
