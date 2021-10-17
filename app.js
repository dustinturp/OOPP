const inquirer = require("inquirer");
const writeFile = require("./utils/write-html-page");
const Employee = require("./utils/employee_constructor");
const Manager = require("./utils/manager_constructor");
const Engineer = require("./utils/engineer_constructor");
const Intern = require("./utils/intern_constructor");

var employeeProfiles = [];
let employeeId = 1;

//create manager first. then prompt
const promptManager = () => {
  console.log("Add manger");
  //last thing prompt new employee
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Manager Name (Required)",
        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the team member? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number or name? (Required)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      managerData.id = employeeId++;
      managerData.position = "Manager"
      const newManagerData = new Manager(managerData.id,
         managerData.managerName, managerData.email,managerData.position,
         managerData.officeNumber,
          );
      employeeProfiles.push(newManagerData);
      console.log("console log from manager section", employeeProfiles);
    });
};

const promptNewEmployee = () => {
  console.log("Add Employee");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team member name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the team member? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "position",
        message: "What position does the member have? (Check one)",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
        ],
      },
      {
        type: "input",
        name: "gitHub",
        message: "give us your github",
        when: ({ position }) => position === "Engineer",
        validate: (gitHubInput) => {
            if (gitHubInput) {
              return true;
            } else {
              console.log("Please enter an email!");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school are you attending?",
        when: ({ position }) => position === "Intern",
        validate: (internSchoolInput) => {
            if (internSchoolInput) {
              return true;
            } else {
              console.log("Please enter an email!");
              return false;
            }
          },
      },
      {
        type: "confirm",
        name: "confirmAddTeamMember",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((employeeData) => {
      //set ID to auto increment
      employeeData.team_member_Id = employeeId++;
      // do I need to append them to the original array instead?
      if (employeeData.position === "Engineer") {
       const newEmployee = new Engineer(employeeData.team_member_Id,
            employeeData.name, employeeData.email,
            employeeData.position, employeeData.gitHub);
            // push result of inquirer prompts to the array
            employeeProfiles.push(newEmployee);
      }
        if (employeeData.position === "Intern") {
            const newEmployee = new Intern(employeeData.team_member_Id,
                employeeData.name, employeeData.email,
                employeeData.position, employeeData.school)
                // push result of inquirer prompts to the array
                employeeProfiles.push(newEmployee);
          }

      if (employeeData.confirmAddTeamMember) {
        return promptNewEmployee();
      } else {
        // console.log("Need to build HTML from data!", employeeProfiles);
        // zip with constructors
        //if === type add to proper constructor
        writeFile(employeeProfiles);
      }
    });
};

//##### prompt users

function init() {
    promptManager()
    .then(promptNewEmployee)
    .then((data) => {
        console.log("Hello from init", data);
      });
    
}

init();
