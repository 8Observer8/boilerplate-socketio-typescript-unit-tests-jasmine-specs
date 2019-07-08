"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySharedClass2_1 = require("../../src/shared/MySharedClass2");
describe("MySharedClass2Tests", function () {
    it("Constructor_PropertyMyStringMustBeHelloWorld", function () {
        var sharedClass = new MySharedClass2_1.MySharedClass2();
        var actualString = sharedClass.MyString;
        expect(actualString).toEqual("Hello, World");
    });
});
//# sourceMappingURL=MySharedClass2.specs.js.map