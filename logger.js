var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.txt', {flags : 'a'});
var log_stdout = process.stdout;


process.stdin

.setEncoding('utf8')
.on('data', data => {
    console.log(`you typed : ${data}`)
    // console.error(data)
})
console.log = function(data) { //
  log_file.write(util.format(data) + '\n');
  log_stdout.write(util.format(data) + '\n');
};
