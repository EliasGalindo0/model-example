const fs = require('fs');

// try {
//   const result = fs.readFileSync('./arquivo.txt', 'utf-8');
//   console.log(result);
// } catch (error) {
//   console.error(error);
// };

try {
  fs.readFile('./arquivo.txt', (err, content) => {
    if(err) return console.log(err);
    console.log(content);
  });
  
} catch (error) {
  console.error(error); 
}

