define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyBjsClass2 = /** @class */ (function () {
        function MyBjsClass2() {
            this._myString = "Hello, World";
        }
        Object.defineProperty(MyBjsClass2.prototype, "MyString", {
            get: function () {
                return this._myString;
            },
            enumerable: true,
            configurable: true
        });
        return MyBjsClass2;
    }());
    exports.MyBjsClass2 = MyBjsClass2;
});
//# sourceMappingURL=MyBjsClass2.js.map