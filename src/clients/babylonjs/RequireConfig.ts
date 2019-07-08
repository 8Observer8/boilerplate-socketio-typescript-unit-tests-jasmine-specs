requirejs.config({
    baseUrl: "js/clients/babylonjs",
    paths: {
        "babylonjs": "https://cdnjs.cloudflare.com/ajax/libs/babylonjs/4.0.3/babylon",
        "socket.io-client": "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io"
    }
});

requirejs(["Program"], (Program) => { });
