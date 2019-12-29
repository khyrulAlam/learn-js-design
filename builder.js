class Shop {
  manufacture(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }
  step1() {
    this.car.addPart();
  }
  step2() {
    this.car.addEngine();
  }
  get() {
    return this.car;
  }
}

class TrackBuilder {
  constructor() {
    this.track = new Track();
  }
  step1() {
    this.track.addPart();
  }
  step2() {
    this.track.addEngine();
  }
  get() {
    return this.track;
  }
}

class Car {
  name = "";
  doors = 0;
  wheel = 0;
  engine = "";
  addPart() {
    this.name = "Tesla Model S";
    this.doors = 4;
    this.wheel = 4;
  }
  addEngine() {
    this.engine =
      this.name +
      " has produced, from the Roadster to the Model S to the Model X, has been powered by a version of that venerable 3-phase AC induction motor";
  }
}

class Track {
  name = "";
  doors = 0;
  wheel = 0;
  engine = "";
  addPart() {
    this.name = "Cybertruck";
    this.doors = 3;
    this.wheel = 6;
  }
  addEngine() {
    this.engine =
      this.name +
      " is to provide a sustainable energy substitute for the roughly 6,500 fossil fuel powered trucks";
  }
}

var shop = new Shop();
var carBuilder = new CarBuilder();
var trackBuilder = new TrackBuilder();

var car = shop.manufacture(carBuilder);
var track = shop.manufacture(trackBuilder);

console.log(car, track);
