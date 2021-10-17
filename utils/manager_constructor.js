// const Employee = require("../utils/employee_constructor");

// re use constructors and modify them as needed
class Manager {
  constructor(id = 890, name = '', email = '', position = 'Manager', officeNum = 101) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.position = position;
    this.officeNum = officeNum;
  }
  // check if num is above 0 
  getOfficeNum() {
      return this.officeNum;
  }
  // put update set directly to
};

module.exports = Manager;

//example 
// const bob = new Manager(123, "test")

