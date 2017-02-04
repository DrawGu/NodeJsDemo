var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
console.log( __filename);
console.log( __dirname );

console.time("Get");
var t = setTimeout(function(){
	console.log("Hello,World!Later!");
}, 2000);

clearTimeout(t);

console.log('Hello world'); 
console.log('byvoid%diovyb'); 
console.log('byvoid%diovyb', 1991); 

console.timeEnd("Get");
setInterval(function(){
	console.log("I am coming!");
}, 2000);