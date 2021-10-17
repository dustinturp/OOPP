const fs = require('fs');

//css template

const cssTemplate = function () {
    return`
    * {
    box-sizing: border-box;
  }
  
    `
    
}


const writeCssFile = fileContent => {
    console.log('content', fileContent)
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/src/styles/styles.css', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
// HTML template fill with generated cards 


module.exports = writeCssFile;