requirejs.config({
    baseUrl: "js/clients/pixijs",
    paths: {
        "pixijs": "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.0.4/pixi.min",
        "socket.io-client": "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io"
    },
    shim: {
        "pixijs": {
            exports: "PIXI"
        }
    }
});
requirejs(["Program"], function (Program) { });
//# sourceMappingURL=RequireConfig.js.map