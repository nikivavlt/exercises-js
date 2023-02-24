const listOfVehicle = new Set();

class Vehicle {
  name;

  color;

  type;

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
}

Vehicle.prototype.fuelType = ''; // - Add new attributes or methods to the class through constructor prototype;

const tesla = new Vehicle('Tesla', 'Pink', 'Electric');
const mercedes = new Vehicle('Mercedes-Benz', 'Black', 'Coupe');

tesla.setFuelType('None');
mercedes.setFuelType('Gasoline');

const getVehiclesList = () => {
  const newList = [...listOfVehicle].map((element) => `Name: ${element.name}
  Color: ${element.color}
  Type: ${element.type}
  Fuel type: ${element.fuelType}`);

  return newList.join('\n');
};

console.log(getVehiclesList());
