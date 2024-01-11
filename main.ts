console.log("This is TypeScript code")

type DeveloperNewType = {
  name: string
  age: number
  isDev: boolean
}
const person5: DeveloperNewType = {
  name: "John",
  age: 30,
  isDev: true,
}

console.log(
  `${person5.name} is ${person5.age} years old and is a developer: ${person5.isDev}`
)
