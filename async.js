const fs = require('fs').promises;

const read = async () => {
try {
    const result = await fs.readFile('./arquivo.txt', 'utf-8');
    
    console.log(result);
} catch (error) {
  console.error(error.message);
  }
};

read();
