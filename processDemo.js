process.on('exit', function(code) {
	setTimeout(function() {
		console.log("This code won't execute!");
	}, 2);
	
	console.log("退出码为:", code);
});
console.log("程序执行结束");