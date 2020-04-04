// TODO: import fs, path and inquirer modules
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What's your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to the run test?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    }
];





// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (error) {
        if (error) {
            console.log(error)
            return;
        }
        console.log("its a success!")
    });
}


// }

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
    inquirer.prompt(questions)
        .then((userInput) => {
            api.getUser(userInput.username)
            .then((response) => {
                return writeToFile("outer/readme.md", generateMarkdown(userInput, response.data));
        })
    })
        .catch(error => {
            console.log(error)
            console.log("Could not create file.");
            process.exit(1);
        })
};

init();
