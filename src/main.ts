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

type PersonNewName = string
const person6: PersonNewName = "John"
console.log(`New Developer is ${person6}`)

class CreateRoom {
  private family: string[] = []
  readonly birthDayJohn: string = "1982-12-12"
  private readonly birthDayJane: string = "1985-12-12"
  constructor(public room: string) {}

  addFamilyMember(name: string) {
    this.family.push(name)
  }

  showFamily() {
    console.log(this.family)
  }

  cleanRoom(soap: string) {
    console.log(`Cleaning ${this.room} with ${soap}`)
  }
}

const john = new CreateRoom("John")
const jane = new CreateRoom("Jane")

john.family
john.addFamilyMember("John")
john.cleanRoom("soap")

john.birthDayJohn
john.birthDayJane
