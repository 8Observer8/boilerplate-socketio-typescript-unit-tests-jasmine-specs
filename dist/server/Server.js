"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var path = require("path");
var GameServer = /** @class */ (function () {
    function GameServer() {
        var _this = this;
        var dir = path.dirname(__dirname);
        this._indexDir = path.join(dir, "../public");
        console.log(this._indexDir);
        this._indexPath = path.join(dir, "../public/index.html");
        var app = express();
        app.get("/", function (req, res) {
            res.sendFile(_this._indexPath);
        });
        app.use("/", express.static(this._indexDir));
        var httpServer = http.createServer(app);
        this._ioServer = socketIO(httpServer, {});
        httpServer.listen(process.env.PORT || 3000);
        console.log("Server started.");
        // Listen for a connection request from any client
        this._ioServer.sockets.on("connection", function (socket) { return _this.OnConnect(socket); });
    }
    GameServer.prototype.OnConnect = function (socket) {
        console.log("Client connected.");
        socket.emit("server_message", { message: "Hello from server." });
    };
    return GameServer;
}());
new GameServer();
//# sourceMappingURL=Server.js.map