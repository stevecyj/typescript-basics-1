"use strict";
const emp1 = {
    name: "coco",
    startDate: new Date(),
    skills: ["js", "ts"],
    access: ["admin", "user"],
};
console.log(emp1);
function moveMammal(mammal) {
    switch (mammal.type) {
        case "human":
            console.log(`Human is moving at ${mammal.walkingSpeed} km/h`);
            break;
        case "horse":
            console.log(`Horse is moving at ${mammal.runningSpeed} km/h`);
            break;
    }
}
moveMammal({ type: "human", walkingSpeed: 10 });
moveMammal({ type: "horse", runningSpeed: 100 });
// Type Casting
const inputUser = document.getElementById("input-user");
inputUser === null || inputUser === void 0 ? void 0 : inputUser.addEventListener("input", (event) => {
    const target = event.target;
    console.log(target.value);
});
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character",
    password: "Must be at least 8 characters long",
};
function addElements(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addElements(1, 2);
const result2 = addElements("JOJO", "DIO");
const result3 = addElements("JOJO", 2);
console.log(result2.split(""));
// nullish coalescing
const theInput = "";
const storedInput = theInput || "DEFAULT";
console.log("storedInput:", storedInput);
const theInput2 = "";
const storedInput2 = theInput2 !== null && theInput2 !== void 0 ? theInput2 : "DEFAULT2";
console.log("storedInput2:", storedInput2);
const theInput3 = null;
const storedInput3 = theInput3 !== null && theInput3 !== void 0 ? theInput3 : "DEFAULT3";
console.log("storedInput3:", storedInput3);
