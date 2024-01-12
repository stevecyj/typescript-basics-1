// intersection types
type ITadmin = {
  access: string[]
}

type Employee = {
  name: string
  startDate: Date
  skills: string[]
}

type AdminEmployee = Employee & ITadmin

const emp1: AdminEmployee = {
  name: "coco",
  startDate: new Date(),
  skills: ["js", "ts"],
  access: ["admin", "user"],
}
console.log(emp1)

interface Human {
  type: "human"
  walkingSpeed: number
}

interface Horse {
  type: "horse"
  runningSpeed: number
}

type Mammal = Human | Horse

function moveMammal(mammal: Mammal) {
  switch (mammal.type) {
    case "human":
      console.log(`Human is moving at ${mammal.walkingSpeed} km/h`)
      break
    case "horse":
      console.log(`Horse is moving at ${mammal.runningSpeed} km/h`)
      break
  }
}

moveMammal({ type: "human", walkingSpeed: 10 })
moveMammal({ type: "horse", runningSpeed: 100 })

// Type Casting
const inputUser = document.getElementById("input-user")! as HTMLInputElement
inputUser?.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement
  console.log(target.value)
})

// index properties
interface ErrorMessages {
  [key: string]: string
}

const errorBag: ErrorMessages = {
  email: "Not a valid email",
  username: "Must start with a capital character",
  password: "Must be at least 8 characters long",
}

// function overloads
type StrOrNum = string | number
function addElements(a: number, b: number): number
function addElements(a: string, b: string): string
function addElements(a: string, b: number): string
function addElements(a: number, b: string): string

function addElements(a: StrOrNum, b: StrOrNum) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = addElements(1, 2)
const result2 = addElements("JOJO", "DIO")
const result3 = addElements("JOJO", 2)

console.log(result2.split(""))

// nullish coalescing
const theInput = ""
const storedInput = theInput || "DEFAULT"
console.log("storedInput:", storedInput)

const theInput2 = ""
const storedInput2 = theInput2 ?? "DEFAULT2"
console.log("storedInput2:", storedInput2)

const theInput3 = null
const storedInput3 = theInput3 ?? "DEFAULT3"
console.log("storedInput3:", storedInput3)
