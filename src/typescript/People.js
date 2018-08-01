"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }
    People.prototype.eat = function () {
        console.log(this.name + " eat something");
    };
    People.prototype.speak = function () {
        console.log("My name is " + this.name + ", age " + this.age);
    };
    return People;
}());
exports.default = People;
