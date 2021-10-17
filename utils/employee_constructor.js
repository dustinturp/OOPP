class Employee {
  constructor(id = 10, name = '', email = '', position = '') {
    this.name = name;
    this.email = email;
    this.id = id;
    this.position = position;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getPosition() {
    return this.position;
  }
  // chaining 
  // getRole() {
  //   return Employee;
  // }
}

module.exports = Employee;
