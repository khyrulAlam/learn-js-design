// 1
var defineProp = function(obj, key, value) {
  var config = {
    value: value,
    writeable: true,
    enumerable: true,
    configurable: true
  };

  Object.defineProperty(obj, key, config);
};

var person = Object.create(Object.prototype);
defineProp(person, "name", "Mofiz rahman");

console.log(person);

// 2
class Car {
  constructor(model, year, range) {
    this.model = model;
    this.year = year;
    this.range = range;
  }
}

var alion = new Car("alion", 2013, 1500);
var mazda = new Car("mazda", 2015, 2500);

console.log(alion, mazda);

// 3

function Carr(model, year, range) {
  this.model = model;
  this.year = year;
  this.range = range;

  this.getCarDetails = function() {
    return (
      this.model +
      " car has range " +
      this.range +
      " and made year " +
      this.year
    );
  };
}

var h = new Carr("honda", 2000, 100);
console.log(h);
console.log(h.getCarDetails());
