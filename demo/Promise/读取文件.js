const fs = require('fs')

fs.readFile('./text.txt', 'utf8', function(err, data) {
  if (err) throw errr;

  console.log(data);
})