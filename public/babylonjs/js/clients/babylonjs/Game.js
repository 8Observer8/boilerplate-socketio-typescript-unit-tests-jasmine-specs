define(["require", "exports", "babylonjs", "socket.io-client", "../../shared/Output"], function (require, exports, BABYLON, io, Output_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game(canvasName) {
            this._socket = io.connect();
            this._socket.on("server_message", function (data) {
                console.log(data);
                Output_1.Output.Instance.Print("JSON message from the remote server: " + JSON.stringify(data));
            });
            // Create canvas and engine
            var canvas = document.getElementById(canvasName);
            var engine = new BABYLON.Engine(canvas);
            // Create a basic BJS Scene object
            var scene = new BABYLON.Scene(engine);
            // Create a FreeCamera, and set its position
            var camera = new BABYLON.FreeCamera("freeCamera", new BABYLON.Vector3(0, 5, -10), scene);
            // Target the camera to the scene origin
            camera.setTarget(BABYLON.Vector3.Zero());
            // Attach the camera to the canvas
            camera.attachControl(canvas, false);
            // Create a basic light
            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
            // Create a built-in "box" shape
            var box = BABYLON.MeshBuilder.CreateBox("box", { size: 5 });
            // Run the render loop
            engine.runRenderLoop(function () {
                scene.render();
            });
            // The canvas/window resize handler
            window.addEventListener("resize", function () {
                engine.resize();
            });
        }
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=Game.js.map