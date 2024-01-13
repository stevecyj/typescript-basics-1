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

function Helper(genericString: string) {
  return function (constructor: Function) {
    console.log(genericString)
    console.log(constructor)
  }
}

function AngularTemplate(template: string, hookId: string) {
  return function (_: any) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

class Employee {
  @Log
  title: string
  private _fullName: string

  @Log2
  set fullName(name: string) {
    this._fullName = name
  }

  constructor(title: string, name: string) {
    this.title = title
    this._fullName = name
  }

  @Log3
  getNameWithTitle(@Log4 id: number) {
    return `Employee - ${id}, Title - ${this.title}, Name - ${this._fullName}`
  }
}

// property decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator")
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// method decorators
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// parameter decorators
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator")
  console.log(target)
  console.log(name)
  console.log(position)
}
