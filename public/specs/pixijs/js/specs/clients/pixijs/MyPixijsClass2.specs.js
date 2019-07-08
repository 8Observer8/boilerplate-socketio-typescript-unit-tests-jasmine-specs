define(["require", "exports", "../../../src/clients/pixijs/MyPixijsClass2"], function (require, exports, MyPixijsClass2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("MPixijsClass2Tests", function () {
        it("Constructor_PropertyMyStringMustBeHelloWorld", function () {
            var myInstance = new MyPixijsClass2_1.MyPixijsClass2();
            var actualResult = myInstance.MyString;
            expect(actualResult).toEqual("Hello, World");
        });
    });
});
//# sourceMappingURL=MyPixijsClass2.specs.js.map