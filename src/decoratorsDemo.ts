function Helper(constructor: Function) {
  console.log(`Showing constructor: ${constructor.name}`)
  console.log(constructor)
}

@Helper
class Car {
  name = "Bugatti Veyron"
  constructor() {
    console.log(`Car ${this.name} created`)
  }
}

const car1 = new Car()
console.log(car1)
