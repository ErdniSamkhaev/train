"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var user = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old"));
    },
};
console.log(user.greet());
(0, utils_1.greet)(user.name);
console.log(utils_1.country);
