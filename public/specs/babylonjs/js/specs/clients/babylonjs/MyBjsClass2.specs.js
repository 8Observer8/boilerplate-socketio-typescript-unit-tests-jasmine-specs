define(["require", "exports", "../../../src/clients/babylonjs/MyBjsClass2"], function (require, exports, MyBjsClass2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("MyBjsClass2Tests", function () {
        it("Constructor_PropertyMyStringMustBeHelloWorld", function () {
            var myInstance = new MyBjsClass2_1.MyBjsClass2();
            var actualResult = myInstance.MyString;
            expect(actualResult).toEqual("Hello, World");
        });
    });
});
//# sourceMappingURL=MyBjsClass2.specs.js.map