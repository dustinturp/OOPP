const fs = require('fs');

//template function
const htmlPageTemplate = function (fileContent) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist//src/css/styles.css">
  </head>
  
  <body>
  <header>
      <div class="container">
          <div class="row">
              <div class="h1"> Employees</div>
          </div>
      </div>
  </header>
  <main>
      <div class="container">
          <div class="row">
          ${htmlCardTemplate(fileContent)} 
          </div>
      </div>
  </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}
// create templates for each unique constructor type or if you can find a way ot make this work in a few hours.

const htmlCardTemplate = function (fileContent) {
    return`
    <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Name: ${fileContent.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Position: ${fileContent.position}
          </h6>
          <h6 class="card-subtitle mb-2">email: ${fileContent.email}</h6>
          <h6 class="card-subtitle mb-2"> ${htmlCardCustomSection(fileContent)}</h6>
        </div>
      </div>
    </div>
  </div>
    `
}

// custom filler for card depending on if data is for an engineer, intern, or manager
const htmlCardCustomSection = function (fileContent) {
    // filter for manger
    //check if manager is there
    console.log(fileContent[0])
    const manager = fileContent.filter(e => e === fileContent[0])
    //testing if new array is made
    console.log("line 64", manager);
    // if (fileContent.position === "Manager") {
    //     return `Office Number: ${fileContent.officeNum}`
    // }
}

// writing files
const writeFile = fileContent => {
    console.log('file content', fileContent);
    let generatedCardsArr = []

    // console.log(" file content length", fileContent.length)
    htmlCardCustomSection(fileContent);
    // for (i = 0; i < fileContent.length; i++){
    //     //every element needs a card built
    //     // htmlCardTemplate(i)
    //     console.log("object", i)
    // }
    
    
    //use let deconstruct array into template or pull template

//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', fileContent, err => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve({
//         ok: true,
//         message: 'File created!'
//       });
//     });
//   });
};
// HTML template fill with generated cards 

module.exports = writeFile;