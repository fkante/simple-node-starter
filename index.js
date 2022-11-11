"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
var port = process.env.PORT || 3333;
// DEV
var whitelist = ["http://localhost:3000"];
var http = require("http").createServer(app);
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(body_parser_1["default"].json());
var corsOptions = {
    origin: function (origin, callback) {
        // allow requests with no origin
        if (!origin)
            return callback(null, true);
        if (whitelist.indexOf(origin) === -1) {
            var message = "This origin is not allowed by the CORS policy.";
            return callback(new Error(message), false);
        }
        return callback(null, true);
    }
};
app.use((0, cors_1["default"])(corsOptions));
http.listen(port, function () {
    console.log("Webiste server listening at http://localhost:".concat(port));
});
