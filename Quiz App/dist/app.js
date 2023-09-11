"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routers/user"));
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://beinggarffield:Shanu@prac.mb0f7y3.mongodb.net/workshop?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Hello Shanu");
});
//Redirect /user
app.use('/user', user_1.default);
mongoose_1.default.connect(connectionString).catch((error) => {
    console.log(error);
    return;
});
app.listen(process.env.PORT, () => {
    console.log("server connected");
});
