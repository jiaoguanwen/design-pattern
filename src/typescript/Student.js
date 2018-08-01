"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("./People");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, number) {
        var _this = _super.call(this, name, age) || this;
        _this.number = number;
        _this.girlfriend = 'xiaoli';
        return _this;
    }
    Student.prototype.study = function () {
        console.log(this.name + " study");
    };
    Student.prototype.getWeight = function () {
        console.log("" + this.weight);
    };
    return Student;
}(People_1.default));
exports.default = Student;
