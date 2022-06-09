const fs = require('fs').promises;

// try {
//   const result = fs.readFile('./arquiv.txt', 'utf-8')
//     .then(console.log)
// } catch (error) {
//   console.error(error)
// }

const result = fs.readFile('./arquiv.txt', 'utf-8')
  .then(console.log)
  .catch(console.error);

console.log(result);
