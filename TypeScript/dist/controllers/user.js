"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = exports.register = void 0;
const user_1 = require("../models/user");
const register = (req, res) => {
    const uname = "Shanu";
    const pass = "Pass";
    const age = 21;
    const result = (0, user_1.addUSerToDB)(uname, pass, age);
    res.send(result);
};
exports.register = register;
const UpdateUser = (req, res) => {
    const result = (0, user_1.UpdateUserData)(req.body);
    res.send(result);
};
exports.UpdateUser = UpdateUser;
