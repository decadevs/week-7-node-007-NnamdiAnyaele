"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controller");
var app = express_1.default();
app.use(express_1.default.json());
// | POST | /calculate  | Calculate the area of different shapes    |
// | GET   | /fetchRecords | Fetch all my previously computated data |
app.get("/fetchRecords", function (req, res) {
    controller_1.getAllData(req, res);
});
app.post("/calculate", function (req, res) {
    var body = req.body;
    if (body.shape === "triangle") {
        var dimension = body.dimension;
        if (!dimension) {
            return res.status(400).send("add dimension property to calculate");
        }
        return controller_1.triangleData(dimension, req, res);
    }
    if (body.shape === "rectangle") {
        var dimension = body.dimension;
        if (!dimension) {
            return res.status(400).send("add dimension property to calculate");
        }
        return controller_1.rectangleData(dimension, req, res);
    }
    if (body.shape === "square") {
        var dimension = body.dimension;
        if (!dimension) {
            return res.status(400).send("add dimension property to calculate");
        }
        return controller_1.squareData(dimension, req, res);
    }
    if (body.shape === "circle") {
        var dimension = body.dimension;
        if (!dimension) {
            return res.status(400).send("add dimension property to calculate");
        }
        return controller_1.circleData(dimension, req, res);
    }
    res.status(400).end("enter a valid shape");
});
var port = process.env.PORT || 8080;
app.listen(port, function () { return console.log("Server running..."); });
exports.default = app;
