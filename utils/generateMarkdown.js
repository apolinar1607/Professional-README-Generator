/*This function returns a license badge based on which license is passed in
  If there is no license, an empty string will be returned.*/
function renderLicenseBadge(license) {
  let licenseTxt = "";
  if (license == "MIT") {
    licenseBadge = "https://img.shields.io/badge/license-MIT-green"
  }
  else if (license == "Apache") {
    licenseBadge = "https://img.shields.io/badge/license-Apache-blue"
  }
  else if (license == "GNU") {
    licenseBadge = "https://img.shields.io/badge/license-GNU-blue"
  }
  else {
    licenseBadge = "";
  }
  return licenseBadge;
}

/*This fuunction returns the license link
 If there is no license, an empty string will be returned*/
function renderLicenseLink(license) {
if (license == "MIT"){
  licenseLink = "./utils/license-MIT";
  }
else if (license == "Apache") {
  licenseLink = "./utils/license-Apache";
  }
else if (license == "GNU") {
  licenseLink = "./utils/license-GNU";
  }
else {
  licenseLink = "";
  }
return licenseLink;
}

/*This function returns the license section of README
 If there is no license, an empty string will be returned.*/
function renderLicenseSection(license) {
    if (license != "N/A"){
    return `Licensed by : [${license}](${renderLicenseLink(license)})`;
    }
    else {
      return "Not Applicable";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ![](${renderLicenseBadge(data.license)})

  ## Description 
  
  ${data.description}
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage} 
  
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.testing}


  ## Questions
  
  Github Username: 
  [${data.userGithub}](https://github.com/${data.userGithub})

  Please send me an email if you have any question(s): 
  ${data.emailAddress}
  
  


  ---
  © 2021 JM Automation . All Rights Reserved.

`;
}

module.exports = generateMarkdown;
