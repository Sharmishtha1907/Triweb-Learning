"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routers/user"));
const auth_1 = __importDefault(require("./routers/auth"));
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://beinggarffield:Shanu@prac.mb0f7y3.mongodb.net/workshop?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello Shanu");
});
//Redirect /user
app.use("/user", user_1.default);
app.use("/auth", auth_1.default);
app.use((err, req, res, next) => {
    let message;
    let statusCode;
    let data;
    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else {
        message = "Some technical issue occured";
        statusCode = 500;
    }
    let resp = { status: "error", message: message, data: {} };
    if (!!err.data) {
        resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
});
mongoose_1.default.connect(connectionString).catch((error) => {
    console.log(error);
    return;
});
app.listen(process.env.PORT, () => {
    console.log("server connected");
});
