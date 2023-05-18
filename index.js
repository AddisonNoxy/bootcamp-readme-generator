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
                message: "What license does this project use?", //make a license badge
                type: "list",
                choices: ["MIT", "Apache"]
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

            // var inputs = [
            //     `# ${title}\n`,
            //     `${description}\n\n`,
            //     `## Installation\n${installation}\n\n`,
            //     `## Usage\n${usage}`,
            //     `## Credits\n${credits}\n\n`,
            //     `## License\n${license}\n\n`,
            //     `## Testing\n${testing}\n\n`
            // ];
            var inputNames = [
                ``,
                `## Table of Contents`,
                `<a name="installation"></a>\n## Installation`,
                `<a name="usage"></a>\n## Usage`,
                `<a name="credits"></a>\n## Credits`,
                `<a name="license"></a>\n## License`,
                `<a name="testing"></a>\n## Testing`,
                `<a name="testing"></a>\n## Questions`
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

            fs.writeFile("README.md", `# ${title}\n`, (err) => {
                console.log("Success!");
            });
            
            var totalInput = `## ${title}\n`;

            for (let i = 0; i < inputValues.length; i++) {
                let writeInput = inputNames[i] + `\n` + inputValues[i] + `\n\n`;
                totalInput = totalInput + writeInput;

                // fs.appendFile("README.md", writeInput, (err) => {
                //     console.log("Wrote the line!");
                // })
            }

            //console.log(totalInput);

            fs.writeFile("README.md", totalInput, (err) => {
                console.log("Readme written!");
            })

            // for (const input of inputs) {
            //     fs.appendFile("README.md", input, (err) => {
            //         console.log("Successfully added the line!");
            //     })
            // }



        })

}

init();