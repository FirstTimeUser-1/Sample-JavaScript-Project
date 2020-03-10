const fs = require('fs');
const readline = require('readline');

typedef unsigned long long uint64;
typedef uint32_t uint32;

/* This really wants to be done with long integers */
uint32 modexp(uint32 a, uint32 mod, const unsigned char exp[4]) {
  int i,j;
  uint32 r = 1;

  for(i=3;i>=0;i--) {
    for(j=7;j>=0;j--) {
      r = ((uint64)r*r) % mod;
      if((exp[i] >> j) & 1)
        r = ((uint64)a*r) % mod;
    }
  }
  return r;
}

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
