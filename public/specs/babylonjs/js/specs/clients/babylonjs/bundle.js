(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyBjsClass1_1 = require("../../../src/clients/babylonjs/MyBjsClass1");
describe("MyBjsClass1Tests", function () {
    it("Constructor_PropertyMyNumberMustBeSetFive", function () {
        var myInstance = new MyBjsClass1_1.MyBjsClass1();
        var actualResult = myInstance.MyNumber;
        expect(actualResult).toEqual(5);
    });
});

},{"../../../src/clients/babylonjs/MyBjsClass1":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyBjsClass2_1 = require("../../../src/clients/babylonjs/MyBjsClass2");
describe("MyBjsClass2Tests", function () {
    it("Constructor_PropertyMyStringMustBeHelloWorld", function () {
        var myInstance = new MyBjsClass2_1.MyBjsClass2();
        var actualResult = myInstance.MyString;
        expect(actualResult).toEqual("Hello, World");
    });
});

},{"../../../src/clients/babylonjs/MyBjsClass2":4}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyBjsClass1 = /** @class */ (function () {
    function MyBjsClass1() {
        this._myNumber = 5;
    }
    Object.defineProperty(MyBjsClass1.prototype, "MyNumber", {
        get: function () {
            return this._myNumber;
        },
        enumerable: true,
        configurable: true
    });
    return MyBjsClass1;
}());
exports.MyBjsClass1 = MyBjsClass1;

},{}],4:[function(require,module,exports){
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

},{}]},{},[1,2]);
