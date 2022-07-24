function renderLicenseBadge(license) {
  switch (license.toUpperCase()) {
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GPL 2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    case "APACHE":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-CLAUSE":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-CLAUSE":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "MOZILLA 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license.toUpperCase()) {
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "GPL 2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "IBM":
      return "https://opensource.org/licenses/IPL-1.0";
    case "APACHE":
      return "https://opensource.org/licenses/Apache-2.0";
    case "BSD 3-CLAUSE":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "BSD 2-CLAUSE":
      return "https://opensource.org/licenses/BSD-2-Clause";
    case "MOZILLA 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    default:
      return "";
  }
}

function renderTableOfContents() {
  return `
          ## Table of Contents
          [Installation](#installation)
          
          [Usage](#usage)
          
          [License](#license)
          
          [Contributing](#contributing)
          
          [Tests](#tests)
          
          [Questions](#questions)`;
}

function renderDescriptionSection(description) {
  return `
          ## Description
          ${description}`;
}

function renderInstallationSection(installation) {
  return `
          ## Installation
          To install the necessary dependencies, run the following command:
          \`\`\`${installation}\`\`\``;
}

function renederUsageSection(usage) {
  return `
          ## Usage
          ${usage}`;
}

function renderLicenseSection(license) {
  return `
          ## License
          This project is licensed under the [${license}](${renderLicenseLink(license)}) license`;
}

function renderContributingSection(contributing) {
  return `
          ## Contributing
          ${contributing}`;
}

function renderTestsSection(tests) {
  return `
          ## Tests
          To run tests, run the following command:
          \`\`\`${tests}\`\`\`}`;
}

function renderQuestionsSection(email, github) {
  return `
          ## Questions
          If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(license)}
          ${renderDescriptionSection(data.description)}
          
          ${renderTableOfContents()}
          
          ${renderInstallationSection(data.installation)}
          
          ${renederUsageSection(data.usage)}
          
          ${renderLicenseSection(data.license)}
          
          ${renderContributingSection(data.contributing)}
          
          ${renderTestsSection(data.tests)}
          
          ${renderQuestionsSection(data.email, data.github)}
`;
}

module.exports = generateMarkdown;
