"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySharedClass1_1 = require("../../src/shared/MySharedClass1");
describe("MySharedClass1Tests", function () {
    it("Constructor_PropertyMyNumberMustBeSetFive", function () {
        var sharedClass = new MySharedClass1_1.MySharedClass1();
        var actualNumber = sharedClass.MyNumber;
        expect(actualNumber).toEqual(5);
    });
});
//# sourceMappingURL=MySharedClass1.specs.js.map