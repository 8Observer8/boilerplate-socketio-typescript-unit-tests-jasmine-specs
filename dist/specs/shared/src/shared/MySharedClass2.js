"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySharedClass2 = /** @class */ (function () {
    function MySharedClass2() {
        this._myString = "Hello, World";
    }
    Object.defineProperty(MySharedClass2.prototype, "MyString", {
        get: function () {
            return this._myString;
        },
        enumerable: true,
        configurable: true
    });
    return MySharedClass2;
}());
exports.MySharedClass2 = MySharedClass2;
//# sourceMappingURL=MySharedClass2.js.map