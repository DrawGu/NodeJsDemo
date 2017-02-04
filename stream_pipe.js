var fs = require('fs');
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('stream_pipe_output.txt');
readerStream.pipe(writerStream);
console.log("程序执行完毕");