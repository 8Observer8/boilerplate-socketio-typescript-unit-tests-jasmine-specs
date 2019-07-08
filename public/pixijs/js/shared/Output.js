define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Output = /** @class */ (function () {
        function Output() {
        }
        Object.defineProperty(Output, "Instance", {
            get: function () {
                if (this._instance === undefined || this._instance === null) {
                    this._instance = new Output();
                    this._instance.Initialize();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        Output.prototype.Print = function (text) {
            this._output.innerHTML += text;
            this._output.innerHTML += "<br>";
        };
        Output.prototype.Initialize = function () {
            this._output = document.getElementById("output");
            if (this._output === null) {
                this._output = document.createElement("div");
                this._output.id = "output";
                document.body.appendChild(this._output);
            }
        };
        return Output;
    }());
    exports.Output = Output;
});
//# sourceMappingURL=Output.js.map