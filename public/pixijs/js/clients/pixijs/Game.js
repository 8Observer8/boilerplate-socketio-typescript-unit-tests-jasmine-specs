define(["require", "exports", "pixijs", "socket.io-client", "../../shared/Output"], function (require, exports, PIXI, io, Output_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game() {
            this._socket = io.connect();
            this._socket.on("server_message", function (data) {
                Output_1.Output.Instance.Print("JSON message from the remote server: " + JSON.stringify(data));
            });
            // Create the renderer
            var renderer = PIXI.autoDetectRenderer({ width: 300, height: 300 });
            // Add the canvas to the HTML document
            document.body.appendChild(renderer.view);
            // Create a container object called the 'stage'
            var stage = new PIXI.Container();
            PIXI.Loader.shared
                .add("../assets/zero.png")
                .load(function () {
                var texture = PIXI.utils.TextureCache["../assets/zero.png"];
                var sprite = new PIXI.Sprite(texture);
                sprite.position.set(100, 100);
                stage.addChild(sprite);
                // Render the stage
                renderer.render(stage);
            });
            // Tell the 'renderer' to 'render' the 'stage'
            renderer.render(stage);
        }
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=Game.js.map