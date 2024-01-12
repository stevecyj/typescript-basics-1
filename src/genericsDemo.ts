// array type
const occupation: Array<string> = []

// promise type
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random()
    num > 0.5 ? resolve("success") : reject("fail")
  }, 2000)
})

promise
  .then((data) => console.log(data.split("")))
  .catch((err) => console.log(err))

// generic function
function mergeObject<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB }
}

const merged = mergeObject({ name: "Max" }, { age: 30 })
console.log(merged.name)
console.log(merged.age)

const merged2 = mergeObject({ name: "Max" }, 30)
console.log(merged2)

// generic class
class DataStorage<T extends string | number | boolean> {
  constructor(public data: T[]) {}

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>(["John", "Max", "Smith"])
const numberStorage = new DataStorage<number>([1, 2, 3])

textStorage.removeItem("Max")

console.log(textStorage.getItems())
console.log(numberStorage.getItems())

// generic utility
const family: Readonly<string[]> = ["John", "Max", "Smith"]
family.push("Mary") // error
family.pop() // error
