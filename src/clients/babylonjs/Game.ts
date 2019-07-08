
import * as BABYLON from "babylonjs";
import * as io from "socket.io-client";
import { Output } from "../../shared/Output";

export class Game
{
    private _socket: SocketIOClient.Socket;

    public constructor(canvasName: string)
    {
        this._socket = io.connect();

        this._socket.on("server_message", (data) =>
        {
            console.log(data);
            Output.Instance.Print("JSON message from the remote server: " + JSON.stringify(data));
        });

        // Create canvas and engine
        let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
        let engine = new BABYLON.Engine(canvas);

        // Create a basic BJS Scene object
        let scene = new BABYLON.Scene(engine);

        // Create a FreeCamera, and set its position
        let camera = new BABYLON.FreeCamera("freeCamera", new BABYLON.Vector3(0, 5, -10), scene);

        // Target the camera to the scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // Attach the camera to the canvas
        camera.attachControl(canvas, false);

        // Create a basic light
        let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        // Create a built-in "box" shape
        let box = BABYLON.MeshBuilder.CreateBox("box", { size: 5 });

        // Run the render loop
        engine.runRenderLoop(() =>
        {
            scene.render();
        });

        // The canvas/window resize handler
        window.addEventListener("resize", () =>
        {
            engine.resize();
        });
    }
}