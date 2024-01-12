class Room {
  private family: string[] = []
  readonly dobJoJo: string = "1982-12-12"
  private readonly dobJane: string = "1985-12-12"
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

const coco = new Room("CoCo")
const dodo = new Room("DoDo")
const jojo = new Room("JoJo")

coco.dobJoJo
coco.addFamilyMember("coco")
coco.cleanRoom("soap")
coco.showFamily()
