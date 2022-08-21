// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Nill") {
    return "";
  }
  return `https://img.shields.io/badge/License-${license}-yellowgreen`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`
  }
  else if(license === "CC0") {
    return `https://choosealicense.com/licenses/cc0-1.0/`
  }
  else if(license === "Apache") {
    return `https://choosealicense.com/licenses/apache-2.0/`
  }
  else if(license === "ISC") {
    return `https://choosealicense.com/licenses/isc/`
  }
  else {
    return "";
  }
  
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `${license}: A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if(license === "CC0") {
    return `${license}: The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.`
  }
  else if(license === "Apache") {
    return `${license}: A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if(license === "ISC") {
    return `${license}: A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`
  }
  // If there is no license, return an empty string
  else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  [![License:](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

## Table of Contents
1. [Description](#description)
2. [Installation Info](#installation-info)
3. [Usage Information](#usage-information)
4. [Contribution Guide](#contribution-guide)
5. [Testing Instruction](#testing-instruction)
6. [License](#license)
7. [Github Username](#github-username)
8. [Questions](#questions)


## Description
  ${data.description}

## Installation Info
  ${data.installInfo}

## Usage Information
  ${data.usageInfo}

## Contribution Guide
  ${data.contribGuide}

## Testing Instructions
  ${data.testInstruct}

## License
  ${renderLicenseSection(data.license)}

## GitHub Username
  ${data.gitUsername}
  [GitHub Profile:](https://github.com/${data.gitUsername})

## Questions
  Contact me @ Email:${data.email} for further questions.
`;
}

module.exports = generateMarkdown;