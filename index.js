const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this project used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run tests on your project?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to generate markdown for README
function generateREADME(data) {
  return `# ${data.title}

![License Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, please reach out to ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
