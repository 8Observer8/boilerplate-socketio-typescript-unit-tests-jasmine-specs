requirejs.config({
    baseUrl: "js",
    paths: {
        "jasmine": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine.min",
        "jasmine-html": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine-html.min",
        "jasmine-boot": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/boot.min"
    },
    shim: {
        "jasmine": {
            exports: "window.jasmineRequire"
        },
        "jasmine-html": {
            deps: ["jasmine"],
            exports: "window.jasmineRequire"
        },
        "jasmine-boot": {
            deps: ["jasmine-html"],
            exports: "window.jasmineRequire"
        }
    }
});
var specsForPixijsClient = [
    "specs/clients/pixijs/MyPixijsClass1.specs",
    "specs/clients/pixijs/MyPixijsClass2.specs"
];
requirejs(["jasmine-boot"], function (jasmineBoot) {
    requirejs(specsForPixijsClient, function () {
        window.onload();
    });
});
//# sourceMappingURL=RequireConfigSpecRunner.js.map