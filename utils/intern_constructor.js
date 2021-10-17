const Employee = require("../utils/employee_constructor");

class Intern {
  constructor(id = 789, name = '', email = '', position = 'Intern', school = '') {
    this.name = name;
    this.email = email;
    this.id = id;
    this.position = position;
    this.school = school;
  }
  // check if num is above 0 
  getSchool() {
      return this.school;
  }
};

module.exports = Intern;
