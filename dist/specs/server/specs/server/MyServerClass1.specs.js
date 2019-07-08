"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyServerClass1_1 = require("../../src/server/MyServerClass1");
describe("MServerClass1Tests", function () {
    it("Constructor_PropertyMyNumberMustBeSetFive", function () {
        var serverClass = new MyServerClass1_1.MyServerClass1();
        var actualNumber = serverClass.MyNumber;
        expect(actualNumber).toEqual(5);
    });
});
//# sourceMappingURL=MyServerClass1.specs.js.map