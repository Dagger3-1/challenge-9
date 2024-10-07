// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  let licenseLink;
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPLv3':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    default:
      licenseLink = '';
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, please reach out to ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
