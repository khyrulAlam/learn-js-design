// make object from a object by using proto

class FarmhousePrototype {
  constructor(proto) {
    this.proto = proto;
  }
  clone() {
    var farmhousePizza = new Farmhouse();
    farmhousePizza.toppings = this.proto.toppings;
    return farmhousePizza;
  }
}

class Farmhouse {
  constructor(toppings) {
    this.toppings = toppings;
  }
  getPizza() {
    console.log("order taken..");
    this.toppings.map((topping, i) => {
      setTimeout(() => {
        console.log("adding -", topping);
      }, 1000 * i);
    });
    setTimeout(() => {
      console.log("Pizza in oven");
    }, this.toppings.length * 1000 + 500);
    setTimeout(() => {
      console.log("your farmhouse Pizza in ready !");
    }, this.toppings.length * 1000 + 1500);
  }
}

var farmhouse = new Farmhouse([
  "Smoked chicken",
  "mushroom",
  "sweet corn",
  "black olives"
]);

var fPrototype = new FarmhousePrototype(farmhouse);

var fPizzaOne = fPrototype.clone();
var fPizzaTwo = fPrototype.clone();
var fPizzaThree = fPrototype.clone();

fPizzaThree.getPizza();
