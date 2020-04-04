// TODO: Return markdown string for README file given a data object.
function generateMarkdown(userInput,data) {
  const {avatar_url,login, html_url, email}= data
  return `
## ${userInput.title}
[![License: ISC](https://img.shields.io/badge/License-${userInput.license}-blue.svg)](https://opensource.org/licenses/ISC)

## Description 
${userInput.description}

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${userInput.install}

## Usage
${userInput.usage}

## License 
This project is licensed under the ${userInput.license}

## Contributing 
${userInput.contributing}

## Tests
To run tests, run the following command:

## Questions
![${login} avatar](${avatar_url})
If you have any questions about the repo, open an issue or contact ![${login}](${html_url}) directly at Kevinvunguyen95@gmail.com

`;
}

module.exports = generateMarkdown;
