// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  ## Table of Content 
  * [installation](#installation)
  * [usage](#usage)
  * [contributing](#contributing)
  * [test](#test)
  * [questions](#questions)
  

  ## Installation
  ${data.installation}




  ## Usage
  ${data.usage}



  
  ## contributing
  ${data.contributing}



  
  ## Test 
  ${data.test}




  
  ## Questions
  If you have any questions, email me at[${data.Email}](mailto:${data.Email}.com)
  Check out my Github [${data.Github}](https://github.com/${data.Github}/)

`;
}

module.exports = generateMarkdown;
