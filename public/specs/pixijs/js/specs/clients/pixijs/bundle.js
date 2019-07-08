(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyPixijsClass1_1 = require("../../../src/clients/pixijs/MyPixijsClass1");
describe("MyPixijsClass1Tests", function () {
    it("Constructor_PropertyMyNumberMustBeSetFive", function () {
        var myInstance = new MyPixijsClass1_1.MyPixijsClass1();
        var actualResult = myInstance.MyNumber;
        expect(actualResult).toEqual(5);
    });
});

},{"../../../src/clients/pixijs/MyPixijsClass1":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyPixijsClass2_1 = require("../../../src/clients/pixijs/MyPixijsClass2");
describe("MPixijsClass2Tests", function () {
    it("Constructor_PropertyMyStringMustBeHelloWorld", function () {
        var myInstance = new MyPixijsClass2_1.MyPixijsClass2();
        var actualResult = myInstance.MyString;
        expect(actualResult).toEqual("Hello, World");
    });
});

},{"../../../src/clients/pixijs/MyPixijsClass2":4}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyPixijsClass1 = /** @class */ (function () {
    function MyPixijsClass1() {
        this._myNumber = 5;
    }
    Object.defineProperty(MyPixijsClass1.prototype, "MyNumber", {
        get: function () {
            return this._myNumber;
        },
        enumerable: true,
        configurable: true
    });
    return MyPixijsClass1;
}());
exports.MyPixijsClass1 = MyPixijsClass1;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyPixijsClass2 = /** @class */ (function () {
    function MyPixijsClass2() {
        this._myString = "Hello, World";
    }
    Object.defineProperty(MyPixijsClass2.prototype, "MyString", {
        get: function () {
            return this._myString;
        },
        enumerable: true,
        configurable: true
    });
    return MyPixijsClass2;
}());
exports.MyPixijsClass2 = MyPixijsClass2;

},{}]},{},[1,2]);
