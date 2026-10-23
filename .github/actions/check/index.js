const fs = require('fs');
if (fs.readFileSync('app.txt', 'utf8').trim() !== 'good') {
  console.log('::error file=app.txt,line=1::OWNED_SOURCE_DEFECT: app.txt must contain good');
  process.exitCode = 1;
} else {
  console.log('OWNED_SOURCE_OK: app.txt contains good');
}
