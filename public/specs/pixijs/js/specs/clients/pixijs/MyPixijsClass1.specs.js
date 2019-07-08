define(["require", "exports", "../../../src/clients/pixijs/MyPixijsClass1"], function (require, exports, MyPixijsClass1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("MyPixijsClass1Tests", function () {
        it("Constructor_PropertyMyNumberMustBeSetFive", function () {
            var myInstance = new MyPixijsClass1_1.MyPixijsClass1();
            var actualResult = myInstance.MyNumber;
            expect(actualResult).toEqual(5);
        });
    });
});
//# sourceMappingURL=MyPixijsClass1.specs.js.map