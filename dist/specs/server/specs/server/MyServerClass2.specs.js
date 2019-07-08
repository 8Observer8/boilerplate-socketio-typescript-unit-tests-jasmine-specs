"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyServerClass2_1 = require("../../src/server/MyServerClass2");
describe("MyServerClass2Tests", function () {
    it("Constructor_PropertyMyStringMustBeHelloWorld", function () {
        var sharedClass = new MyServerClass2_1.MyServerClass2();
        var actualString = sharedClass.MyString;
        expect(actualString).toEqual("Hello, World");
    });
});
//# sourceMappingURL=MyServerClass2.specs.js.map