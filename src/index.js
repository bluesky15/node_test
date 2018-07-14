var express = require('express');

class ExpressServer {
    constructor(port) {
        this.port = port;
    }
    start() {
        var app = express();

        app.get('/', function (req, resp) {
            resp.send("Hello");
        });

        app.listen(this.port);
        console.log("server running on port:" + this.port);
    }
}

var eserver = new ExpressServer(9000);
eserver.start();