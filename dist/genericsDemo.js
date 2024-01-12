"use strict";
// array type
const occupation = [];
// promise type
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        num > 0.5 ? resolve("success") : reject("fail");
    }, 2000);
});
promise
    .then((data) => console.log(data.split("")))
    .catch((err) => console.log(err));
// generic function
function mergeObject(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged = mergeObject({ name: "Max" }, { age: 30 });
console.log(merged.name);
console.log(merged.age);
const merged2 = mergeObject({ name: "Max" }, 30);
console.log(merged2);
// generic class
class DataStorage {
    constructor(data) {
        this.data = data;
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage(["John", "Max", "Smith"]);
const numberStorage = new DataStorage([1, 2, 3]);
textStorage.removeItem("Max");
console.log(textStorage.getItems());
console.log(numberStorage.getItems());
// generic utility
const family = ["John", "Max", "Smith"];
family.push("Mary"); // error
family.pop(); // error
