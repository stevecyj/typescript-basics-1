let myNum = 10
let anotherNum: number = 20

myNum = 12
myNum = "12"

anotherNum = 30
anotherNum = false

let salary
salary = 1000
salary = "1000"
salary = true

const developer = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  jobTitle: "Web Developer",
}

const languages = ["JavaScript", "TypeScript", "HTML", "CSS"]
languages.push("Python")
languages.push(10)

const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
numbers.push("6")
numbers.push(true)

const arrOfObj: { name: string; age: number }[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
]
arrOfObj.push({ name: "Jack", age: 40 })
arrOfObj.push({ name: "Jill", age: "35" })

const arrOfArrays: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]
arrOfArrays.push([7, 8, 9])
arrOfArrays.push([10, 11, "12"])

const addNums = (num1, num2) => {
  return num1 + num2
}
addNums(5, 10)
addNums(5, "10")
addNums(5, true)

const multiNums = (num1: number, num2: number) => {
  return num1 * num2
}
multiNums(5, 10)
multiNums(5, "10")
multiNums(5, true)

const modNums = (num1: number, num2: number): number => {
  return num1 % num2
}
modNums(5, 10)
modNums(5, "10")

const printSum = (num1: number, num2: number): void => {
  console.log(num1 + num2)
}
printSum(5, 10)
printSum(5, "10")

// union types
let numOrStr: number | string
numOrStr = 10
numOrStr = "ten"

let arr: (number | string)[] = [1, 2, 3, "four", "five"]

// literal types
let myLiteral: "one" | "two" | "three"
myLiteral = "one"
myLiteral = "four"

// enum types
enum Role {
  ADMIN,
  USER,
  GUEST,
}
const myRole = Role.ADMIN

// optionals type
let optionalObj: { name: string; age: number | undefined } = {
  name: "John",
  age: 30,
}

let betterOptObj: { name: string; age?: number } = {
  name: "John",
  age: 30,
}

// interfaces and types
interface Developer {
  name: string
  age: number
  isDev: boolean
}

const person1: Developer = {
  name: "John",
  age: 30,
  isDev: true,
}
const person2: Developer = {
  name: "Jane",
  age: 25,
  isDev: false,
}

// types
type DeveloperType = {
  name: string
  age: number
  isDev: boolean
}

const person3: DeveloperType = {
  name: "John",
  age: 30,
  isDev: true,
}

type PersonName = string
const person4: PersonName = "John"

type CoderType = {
  name: string
  category: "front-end" | "back-end" | "full-stack"
  age: number
}[]

const coder1: CoderType = [
  {
    name: "John",
    category: "front-end",
    age: 30,
  },
  {
    name: "Jane",
    category: "back-end",
    age: 25,
  },
]
