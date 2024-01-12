"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Helper(constructor) {
    console.log(`Showing constructor: ${constructor.name}`);
    console.log(constructor);
}
let Car = class Car {
    constructor() {
        this.name = "Bugatti Veyron";
        console.log(`Car ${this.name} created`);
    }
};
Car = __decorate([
    Helper
], Car);
const car1 = new Car();
console.log(car1);
