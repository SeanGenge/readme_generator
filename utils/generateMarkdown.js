// A list of the more common open source licenses
const licenses = Object.freeze({
  "GPL 3.0": {
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },
  "GPL 2.0": {
    badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },
  "MIT": {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT"
  },
  "ISC": {
    badge: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "https://opensource.org/licenses/ISC"
  },
  "IBM": {
    badge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    link: "https://opensource.org/licenses/IPL-1.0"
  },
  "APACHE": {
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0"
  },
  "BSD 3-CLAUSE": {
    badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    link: "https://opensource.org/licenses/BSD-3-Clause"
  },
  "BSD 2-CLAUSE": {
    badge: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    link: "https://opensource.org/licenses/BSD-2-Clause"
  },
  "MOZILLA 2.0": {
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0"
  }
});

function renderLicenseBadge(license) {
  // Returns the licence badge
  if (license.toUpperCase() in licenses) {
    return licenses[license.toUpperCase()].badge;
  }
  
  return "";
}

function renderLicenseLink(license) {
  // Returns a license link
  if (license.toUpperCase() in licenses) {
    return licenses[license.toUpperCase()].link;
  }
  
  return "";
}

function renderTableOfContents() {
  // Displays the table of contents
  return `
## Table of Contents
- [Installation](#installation)
  
- [Usage](#usage)
  
- [License](#license)
  
- [Contributing](#contributing)
  
- [Tests](#tests)
  
- [Questions](#questions)`;
}

function renderDescriptionSection(description) {
  if(!description) return "";
  
  return `
## Description
${description}`;
}

function renderInstallationSection(installation) {
  if(!installation) return "";
  
  return `
## Installation
To install the necessary dependencies, run the following command:
\`\`\`
  ${installation}
\`\`\``;
}

function renederUsageSection(usage) {
  if(!usage) return "";
  
  return `
## Usage
${usage}`;
}

function renderLicenseSection(license) {
  if(!license || license === "No License") return "";
  
  return `
## License
This project is licensed under the [${license.toUpperCase()}](${renderLicenseLink(license)}) license`;
}

function renderContributingSection(contributing) {
  if(!contributing) return "";
  
  return `
## Contributing
${contributing}`;
}

function renderTestsSection(tests) {
  if(!tests) return "";
  
  return `
## Tests
To run tests, run the following command:
\`\`\`
  ${tests}
\`\`\``;
}

function renderQuestionsSection(email, github) {
  if(!email && !github) return "";
  
  return `
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}).`;
}

function generateMarkdown(data) {
  // Generates the readme.md markdown
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
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

module.exports = {
  generateMarkdown,
  licenses
};
