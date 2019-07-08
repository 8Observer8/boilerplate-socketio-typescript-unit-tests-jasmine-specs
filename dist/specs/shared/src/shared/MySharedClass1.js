"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySharedClass1 = /** @class */ (function () {
    function MySharedClass1() {
        this._myNumber = 5;
    }
    Object.defineProperty(MySharedClass1.prototype, "MyNumber", {
        get: function () {
            return this._myNumber;
        },
        enumerable: true,
        configurable: true
    });
    return MySharedClass1;
}());
exports.MySharedClass1 = MySharedClass1;
//# sourceMappingURL=MySharedClass1.js.map