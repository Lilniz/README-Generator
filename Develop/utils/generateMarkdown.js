// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `https://img.shields.io/badge/License-MIT-yellowgreen`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  [![License:](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  ## Description
  ${data.description}
  ## Installation Info
  ${data.installInfo}
  ## Usage Information
  ${data.usageInfo}
  ## Contribution Guide
  ${data.contribGuide}
  ## Testing Instructions
  ${data.testInstructions}
  ## License
  ${data.license}
  ## GitHub Username
  ${data.gitUsername}
  ## Contact Email
  ${data.email}
`;
}

module.exports = generateMarkdown;