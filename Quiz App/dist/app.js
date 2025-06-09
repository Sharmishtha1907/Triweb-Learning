"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routers/user"));
const auth_1 = __importDefault(require("./routers/auth"));
const quiz_1 = __importDefault(require("./routers/quiz"));
const exam_1 = __importDefault(require("./routers/exam"));
const report_1 = __importDefault(require("./routers/report"));
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://username:pass@prac.mb0f7y3.mongodb.net/workshop?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello Shanu");
});
//Redirect /user
app.use("/user", user_1.default);
app.use("/auth", auth_1.default);
//Redirect /quiz
app.use("/quiz", quiz_1.default);
app.use("/exam", exam_1.default);
app.use("/report", report_1.default);
app.use((err, req, res, next) => {
    let mess;
    let statusCode;
    let data;
    if (!!err.statusCode && err.statusCode < 500) {
        mess = err.message;
        statusCode = err.statusCode;
    }
    else {
        mess = "Some technical issue occured";
        statusCode = 500;
    }
    let resp = { status: "error", message: mess, data: {} };
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
