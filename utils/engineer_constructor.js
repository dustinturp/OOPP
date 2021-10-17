const Employee = require("../utils/employee_constructor");

class Engineer {
  constructor(id = 456, name = '', email = '', position = '', gitHub = '') {
    this.id = id;
    this.name = name;
    this.email = email;
    this.position = position;
    this.gitHub = gitHub;
  }
  // check if num is above 0 
  getGitHub() {
      return this.gitHub;
  }
  getPosition() {
      return this.position;
  }
};

module.exports = Engineer;
