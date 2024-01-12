function Helper(genericString: string) {
  return function (constructor: Function) {
    console.log(genericString)
    console.log(constructor)
  }
}

@Helper("Showing constructor:")
@AngularTemplate("<h1>My Angular App</h1>", "app")
class Car {
  name = "Bugatti Veyron"
  constructor() {
    console.log(`Car ${this.name} created`)
  }
}

const car1 = new Car()
console.log(car1)

function AngularTemplate(template: string, hookId: string) {
  return function (_: any) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}
