// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    licTxt = "https://img.shields.io/badge/license-MIT-green"
  }
  else if (license == "Apache") {
    licTxt = "https://img.shields.io/badge/license-Apache-blue"
  }
  else if (license == "GPL") {
    licTxt = "https://img.shields.io/badge/license-GPL-blue"
  }
  else if (license == "BSD") {
    licTxt = "https://img.shields.io/badge/license-BSD-green"
  }
  else {
    licTxt = "";
  }
  return licTxt;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  [Github license](https://img.shields.io/badge/license-Apache-green)

  ## Description 
  
  ${data.description}
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Qestions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage} 
  
  
  ## License
  
  ${data.license}
  
  
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.testing}


  ## Questions
  
  
  
  ---
  © 2021 amagtanong@gmail.com . All Rights Reserved.


`;
}

module.exports = generateMarkdown;
