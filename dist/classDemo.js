"use strict";
class Room {
    constructor(room) {
        this.room = room;
        this.family = [];
        this.dobJoJo = "1982-12-12";
        this.dobJane = "1985-12-12";
    }
    addFamilyMember(name) {
        this.family.push(name);
    }
    showFamily() {
        console.log(this.family);
    }
    cleanRoom(soap) {
        console.log(`Cleaning ${this.room} with ${soap}`);
    }
}
const coco = new Room("CoCo");
const dodo = new Room("DoDo");
const jojo = new Room("JoJo");
coco.dobJoJo;
coco.addFamilyMember("coco");
coco.cleanRoom("soap");
coco.showFamily();
