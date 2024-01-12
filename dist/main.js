"use strict";
console.log("This is TypeScript code");
const person5 = {
    name: "John",
    age: 30,
    isDev: true,
};
console.log(`${person5.name} is ${person5.age} years old and is a developer: ${person5.isDev}`);
const person6 = "John";
console.log(`New Developer is ${person6}`);
class CreateRoom {
    constructor(room) {
        this.room = room;
        this.family = [];
        this.birthDayJohn = "1982-12-12";
        this.birthDayJane = "1985-12-12";
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
const john = new CreateRoom("John");
const jane = new CreateRoom("Jane");
john.family;
john.addFamilyMember("John");
john.cleanRoom("soap");
john.birthDayJohn;
john.birthDayJane;
