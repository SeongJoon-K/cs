class Latte {
  constructor() {
    this.name = "latte";
  }
}

class Espresso {
  constructor() {
    this.name = "Espresso";
  }
}

class LatteFactory {
  static createCoffee() {
    return new Latte();
  }
}

class EspressoFactory {
  static createCoffee() {
    return new Espresso();
  }
}

const factoryList = { LatteFactory, EspressoFactory };

console.log(factoryList["LatteFactory"].createCoffee());
console.log();

class CoffeeFactory {
  static createCoffee(type) {
    const factory = factoryList[type];
    return factory.createCoffee();
  }
}

const main = () => {
  const coffee = CoffeeFactory.createCoffee("LatteFactory");
  // 라떼 커피 주문
  console.log(coffee.name);
};

main();
