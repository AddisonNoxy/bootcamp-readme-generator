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
                message: "What license does this project use?"
            },
            {
                name: "testing",
                message: "How can the project be tested?"
            }
        ])
        .then((response) => {
            const title = response.title;
            const installation = response.installation;
            const usage = response.usage;
            const credits = response.credits;
            const license = response.license;
            const testing = response.testing;
            console.log(response);
        })
}

init();