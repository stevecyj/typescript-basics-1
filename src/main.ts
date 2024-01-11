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
  public room: string
  private family: string[] = []
  constructor(room: string) {
    this.room = `${name}'s room`
  }

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

const roomJohn = new CreateRoom("John")
const roomJane = new CreateRoom("Jane")

roomJohn.family
roomJohn.addFamilyMember("John")
