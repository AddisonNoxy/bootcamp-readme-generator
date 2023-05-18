const fs = require("fs");
const inquirer = require("inquirer");

function init() {
    inquirer
        .prompt([
            {
                name: "title",
                message: "What is the project's title?"
            },
            {
                name: "description",
                message: "What is a brief description of the project?"
            },
            {
                name: "installation",
                message: "How would one install this project?"
            },
            {
                name: "usage",
                message: "What is the project used for?"
            },
            {
                name: "credits",
                message: "Who helped with the project?"
            },
            {
                name: "license",
                message: "What license does this project use?",
                type: "list",
                choices: ["MIT", "Eclipse", "Mozilla"]
            },
            {
                name: "testing",
                message: "How can the project be tested?"
            },
            {
                name: "username",
                message: "What is your GitHub username?"
            },
            {
                name: "email",
                message: "What email can people reach you with?"
            }
        ])
        .then((response) => {
            const title = response.title;
            const description = response.description
            const installation = response.installation;
            const usage = response.usage;
            const credits = response.credits;
            const license = response.license;
            const testing = response.testing;
            const username = response.username;
            const email = response.email;
            console.log(response);

            switch (license) {
                case "MIT":
                    var licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                break;
                case "Eclipse":
                    var licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
                break;
                case "Mozilla":
                    var licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
                break;
                default:
                    var licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;


            }

            var inputNames = [
                ``,
                `## Table of Contents`,
                `<a name="installation"></a>\n## Installation`,
                `<a name="usage"></a>\n## Usage`,
                `<a name="credits"></a>\n## Credits`,
                `<a name="license"></a>\n## License`,
                `<a name="testing"></a>\n## Testing`,
                `<a name="questions"></a>\n## Questions`
            ];

            const tableOfContents = `1. [ Description ](#description)\n2. [ Installation ](#installation)\n3. [ Usage ](#usage)\n4. [ Credits ](#credits)\n5. [ License ](#license)\n6. [ Testing ](#testing)\n6. [ Questions ](#questions)`;

            var inputValues = [
                description,
                tableOfContents,
                installation,
                usage,
                credits,
                license,
                testing,
                `${username}\n\n${email}`
            ]

            fs.writeFile("Example-README.md", ``, (err) => {
                console.log("Success!");
            });
            
            var totalInput = licenseBadge + `\n\n# ${title}\n`;

            for (let i = 0; i < inputValues.length; i++) {
                let writeInput = inputNames[i] + `\n` + inputValues[i] + `\n\n`;
                totalInput = totalInput + writeInput;
            }

            fs.writeFile("Example-README.md", totalInput, (err) => {
                console.log("Readme written!");
            })



        })

}

init();