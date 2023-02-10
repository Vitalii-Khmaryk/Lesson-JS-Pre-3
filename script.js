function CoffeeMake(mark, model) {
  this.mark = mark;
  this.model = model;
  this.status = false;
  this.weight = 5;
}
CoffeeMake.prototype.on = function () {
  this.status = true;
  console.log(`Coffee maker on.`);
};
CoffeeMake.prototype.off = function () {
  this.status = false;
  console.log("Coffee maker off.");
};

let c1 = new CoffeeMake("Okko", "Chini");
console.log(c1);
console.log(c1.status);
c1.on();
c1.off();

function DripCoffeeMaker(mark, model, amountOfcoffee, coffeeBrewingSpeed) {
  CoffeeMake.call(this, mark, model);
  this.amountOfcoffee = amountOfcoffee;
  this.coffeeBrewingSpeed = coffeeBrewingSpeed;
}
DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
DripCoffeeMaker.prototype.constructor = DripCoffeeMaker;
DripCoffeeMaker.prototype.brew = function () {
  if (this.status) {
    console.log("DripCoffeeMaker on");
  } else {
    console.log("DripCoffeeMaker off");
  }
};
let c2 = new DripCoffeeMaker("Jura", "Inisa", "300", "20");
console.log(c2);
console.log(c2.status);
c2.brew();
c2.on();
c2.off();
console.log(c2 instanceof CoffeeMake);

function FrenchPressCoffeeMaker(mark, model, power) {
  CoffeeMake.call(this, mark, model);
  this.power = power;
  this.height = 1;
  this.color = "red";
}
FrenchPressCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
FrenchPressCoffeeMaker.prototype.constructor = FrenchPressCoffeeMaker;
FrenchPressCoffeeMaker.prototype.brew = function () {
  if (this.status) {
    console.log("FrenchPressCoffeeMaker on");
  } else {
    console.log("FrenchPressCoffeeMaker off");
  }
};

let c3 = new FrenchPressCoffeeMaker("Suni", "Apachi", "50");
console.log(c3);
console.log(c3.status);
c3.brew();
c3.on();
c3.off();
console.log(c3 instanceof CoffeeMake);

function EspressoMachine(mark, model, voltage) {
  CoffeeMake.call(this, mark, model);
  this.voltage = voltage;
  this.color = "black";
}
EspressoMachine.prototype = Object.create(CoffeeMake.prototype);
EspressoMachine.prototype.constructor = EspressoMachine;
EspressoMachine.prototype.brew = function () {
  console.log("EspressoMachine on");
};
let c4 = new EspressoMachine("Ida", "Qartus", "12V");
console.log(c4);
console.log(c4.status);
c4.on();
c4.off();
console.log(c4 instanceof CoffeeMake);
