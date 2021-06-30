const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquire = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputpath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const inquirer = require('inquirer');

const Team = [];
addToTeam();

function addToTeam() {
    inquirer.prompt([{
        type: "list",
        name: "Add employees, or select finished",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Finished"
        ]

    }
]).then(function(data) {
    const employeeRole = data.addEmployees;
    if (employeeRole === "Manager") {
        managerInfo();
    } 
    else if (employeeRole === "Engineer") {
        engineerInfo();
    }
    else if (employeeRole === "Intern") {
        internInfo();
    }
    else if (employeeRole === "Finished") {
        finishedInfo();
    }

});
}

function managerInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Manager's name:"
        },
        {
            type: "input",
            name: "managerId",
            message: "Manager's ID:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Manager's Email:"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Manager's Office Number:"
        },
    ])
}