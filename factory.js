class Factory {
  constructor() {
    this.employee = null;
  }
  createEmployee(type, name) {
    if (type === "temporary") {
      this.employee = new Temporary();
    } else if (type === "partTime") {
      this.employee = new PartTime();
    } else if (type === "fullTime") {
      this.employee = new FullTime();
    }
    this.employee.type = type;
    this.employee.name = name;
    return this.employee;
  }
}

class Temporary {
  constructor() {
    this.hours = "$10";
  }
}

class PartTime {
  constructor() {
    this.hours = "$12";
  }
}

class FullTime {
  constructor() {
    this.hours = "$15";
  }
}

var employees = [];

var factory = new Factory();

employees.push(factory.createEmployee("partTime", "abul"));
employees.push(factory.createEmployee("temporary", "mofiz"));
employees.push(factory.createEmployee("fullTime", "kuddus"));
employees.push(factory.createEmployee("temporary", "kalam"));

console.log(employees);
