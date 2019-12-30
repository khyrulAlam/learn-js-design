class Singleton {
  constructor() {
    this.instance = null;
  }

  createInstance() {
    var obj = {
      connection: "db connect create",
      dbType: "mongodb",
      user: "lam-sum",
      method: {
        create: () => {},
        delete: () => {},
        update: () => {},
        reade: () => {}
      }
    };
    return obj;
  }

  getInstance() {
    if (this.instance === null) {
      this.instance = this.createInstance();
    }
    return this.instance;
  }
}

var single = new Singleton();

var dbConnectOne = single.getInstance();
var dbConnectTwo = single.getInstance();

console.log(dbConnectOne);
console.log(dbConnectTwo);
