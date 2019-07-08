
import * as express from "express";
import * as http from "http";
import * as socketIO from "socket.io";
import * as path from "path";
import { _DepthCullingState } from "babylonjs";

class GameServer
{
    private _ioServer: SocketIO.Server;
    private _indexDir: string;
    private _indexPath: string;

    public constructor()
    {
        let dir = path.dirname(__dirname);
        this._indexDir = path.join(dir, "../public");
        this._indexPath = path.join(dir, "../public/index.html");

        let app = express();
        app.get("/", (req, res) =>
        {
            res.sendFile(this._indexPath);
        });

        app.use("/", express.static(this._indexDir));
        let httpServer = http.createServer(app);
        this._ioServer = socketIO(httpServer, {});
        httpServer.listen(process.env.PORT || 3000);
        console.log("Server started.");

        // Listen for a connection request from any client
        this._ioServer.sockets.on(
            "connection",
            (socket: SocketIO.Socket) => this.OnConnect(socket));
    }

    private OnConnect(socket: SocketIO.Socket)
    {
        console.log("Client connected.")
        socket.emit("server_message", { message: "Hello from server." });
    }
}

new GameServer();