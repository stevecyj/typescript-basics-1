"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let Car = class Car {
    constructor() {
        this.name = "Bugatti Veyron";
        console.log(`Car ${this.name} created`);
    }
};
Car = __decorate([
    Helper("Showing constructor:"),
    AngularTemplate("<h1>My Angular App</h1>", "app")
], Car);
const car1 = new Car();
console.log(car1);
function Helper(genericString) {
    return function (constructor) {
        console.log(genericString);
        console.log(constructor);
    };
}
function AngularTemplate(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
class Employee {
    set fullName(name) {
        this._fullName = name;
    }
    constructor(title, name) {
        this.title = title;
        this._fullName = name;
    }
    getNameWithTitle(id) {
        return `Employee - ${id}, Title - ${this.title}, Name - ${this._fullName}`;
    }
}
__decorate([
    Log
], Employee.prototype, "title", void 0);
__decorate([
    Log2
], Employee.prototype, "fullName", null);
__decorate([
    Log3,
    __param(0, Log4)
], Employee.prototype, "getNameWithTitle", null);
// property decorators
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// method decorators
function Log3(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// parameter decorators
function Log4(target, name, position) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
