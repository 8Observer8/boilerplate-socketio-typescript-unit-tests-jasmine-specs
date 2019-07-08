
import * as PIXI from "pixijs";
import * as io from "socket.io-client";
import { Output } from "../../shared/Output";

export class Game
{
    private _socket: SocketIOClient.Socket;

    public constructor()
    {
        this._socket = io.connect();

        this._socket.on("server_message", (data) =>
        {
            Output.Instance.Print("JSON message from the remote server: " + JSON.stringify(data));
        });

        // Create the renderer
        let renderer = PIXI.autoDetectRenderer({ width: 300, height: 300 });

        // Add the canvas to the HTML document
        document.body.appendChild(renderer.view);

        // Create a container object called the 'stage'
        let stage = new PIXI.Container();

        PIXI.Loader.shared
            .add("../assets/zero.png")
            .load(() =>
            {
                let texture = PIXI.utils.TextureCache["../assets/zero.png"];
                let sprite = new PIXI.Sprite(texture);
                sprite.position.set(100, 100);
                stage.addChild(sprite);
                // Render the stage
                renderer.render(stage);
            });

        // Tell the 'renderer' to 'render' the 'stage'
        renderer.render(stage);
    }
}