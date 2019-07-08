define(["require", "exports", "../../../src/clients/babylonjs/MyBjsClass1"], function (require, exports, MyBjsClass1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("MyBjsClass1Tests", function () {
        it("Constructor_PropertyMyNumberMustBeSetFive", function () {
            var myInstance = new MyBjsClass1_1.MyBjsClass1();
            var actualResult = myInstance.MyNumber;
            expect(actualResult).toEqual(5);
        });
    });
});
//# sourceMappingURL=MyBjsClass1.specs.js.map