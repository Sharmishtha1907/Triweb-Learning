"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = __importDefault(require("../model/user"));
const registerUser = (req, res, next) => {
    const User = new user_1.default(req.body);
    User.save();
    res.send("registeration done");
};
exports.registerUser = registerUser;
