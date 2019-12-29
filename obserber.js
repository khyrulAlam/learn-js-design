class Subjects {
  constructor() {
    this.count = 0;
    this.observers = [];
  }

  increment() {
    this.count++;
    this.notify();
  }

  subscribe(obs) {
    this.observers.push(obs);
  }

  unsubscribe(obs) {
    let index = this.observers.indexOf(obs);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach(obs => obs.update(this));
  }
}

class LifeOne {
  update(arg) {
    console.log(arg);
  }
}

class LifeTwo {
  update(arg) {
    console.log(arg);
  }
}

var sub = new Subjects();

var p1 = new LifeOne();
var p2 = new LifeTwo();

sub.subscribe(p1);
sub.subscribe(p2);

setTimeout(() => {
  sub.unsubscribe(p2);
}, 8000);

sub.increment();
