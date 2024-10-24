// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !=='None') {
      return `!(https://img.shields.io/github/license/DDeMarois/README-Generator)`
    }
    return '';
  }
  

  function renderLicenseLink(license) {
    if (license !== 'None') {
      return '\n*[License](#License)\n';
    }
    return '';
  }
  

  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License

  This project is licensed under ${license}.`;
    }
    return '';
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge[data.license]}

    ## Description
  
    ${data.description}
  
    ## Table of Contents
  
    - [Installation](#installation)
  
    - [Usage](#usage)
    
    - ${renderLicenseLink(data.license)}
   
    - [Contributing](#contributing)
  
    - [Tests](#tests)
    
    - [Questions](#questions)
  
    ## Installation
  
    Run the following command to install dependencies needed for the repo:
    
    \`\`\`
    ${data.installation}
    \`\`\`
  
    ## Usage
  
    ${data.usage}
  
    ${renderLicenseSection(data.license)}
  
    ## Contributing
  
    ${data.contributing}
  
    ## Tests
  
    Run the following command to run tests:

    \`\`\`
    ${data.test}
    \`\`\`
  
    ## Questions
  
    If there are any questions about the repo, feel free to open an issue
  `;
  }
  
  export default generateMarkdown;
  