// TODO: Include packages needed for this application
const Inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Type a short description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps needed to install your application?',
      name: 'installation',
    },
    
  ])
  .then((response) => {
    
    fs.writeFile('./readme.html', writeToFile(response), err => {
        if (err) {
          console.error(err);
          
       }
        console.log('Readme file successfully created')
       
      });
      console.log('Your new readme has been created!')
  }
  
)
];

// TODO: Create a function to write README file
function writeToFile(title, description, installation) {
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.5.1/tailwind.min.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <body>
    <main>
        <h1 class= 'flex justify-center  border-b-1'># <${title}></h1>  
        <div class= 'bg-blue-200 border-2 border-dashed'>
            <h2 class= 'flex justify-center text-lg text-bold border-b-1 '>##DESCRIPTION</h2>
            <h2 class= 'flex justify-center  border-b-1 '> ${description}.</h2>
            <h2 class= 'flex justify-center  border-b-1 '> ## INSTALLATION</h2>
            <h2 class= 'flex justify-center  border-b-1 '> ${installation}.</h2>
        </div>
    </main>
	
  </body>
</html>`;
    
      }


// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
