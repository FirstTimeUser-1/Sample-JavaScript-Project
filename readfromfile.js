const fs = require('fs');
const readline = require('readline');


console.log('create interface');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter File path to open ', (answer) => {  
fs.open(answer, 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
  

  rl.close();
});



var x;

validateEmailFormat: function( string ) {
  var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return emailExpression.test( string );
}
