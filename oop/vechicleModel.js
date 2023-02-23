class Vechicle {
  name;

  color;

  type;

  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  getVechicleName() {
    return this.name;
  }
}

const tesla = new Vechicle('Tesla', 'Pink', 'Electric');

console.log(tesla);
console.log(tesla.vechicleName());
