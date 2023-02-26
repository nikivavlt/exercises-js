import Vehicle from './Vehicle.js';

const listOfVehicle = new Set();

class Car {
  name;

  color;

  type;

  static listName = 'Vehicle list 2022'; // Static class attribute, belong to the class itself;

  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;

    listOfVehicle.add(this);
  }

  getName() {
    return this.name;
  }

  setFuelType(fuelType) {
    this.fuelType = fuelType;
  }

  static setListName(name) { // Static method for class
    this.listName = name;
  }
}

Car.prototype.fuelType = ''; // Add new attributes or methods to the class through constructor prototype;

const tesla = new Car('Tesla', 'Pink', 'Electric');
const mercedes = new Car('Mercedes-Benz', 'Black', 'Coupe');

tesla.setFuelType('None');
mercedes.setFuelType('Gasoline');

Car.listName = 'Vehicle list 2023'; // Change static class attribute for all Vehicle class objects;

Car.setListName('New vehicle list 2023');

const getVehiclesList = () => {
  const newList = [...listOfVehicle].map((element) => `Name: ${element.name}
  Color: ${element.color}
  Type: ${element.type}
  Fuel type: ${element.fuelType}
  List name: ${Car.listName}`);

  return newList.join('\n');
};

console.log(getVehiclesList());
