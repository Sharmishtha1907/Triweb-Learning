"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../model/user"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const User = new user_1.default(req.body);
        const result = yield User.save();
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "Registeration done", data: { userId: result._id } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "No result found", data: {} };
        res.status(500).send(resp);
    }
});
exports.registerUser = registerUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const userID = req.params.userId;
        const User = yield user_1.default.findById(userID, { name: 1, email: 1 });
        if (!User) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "User Found", data: { user: User } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "No result found", data: {} };
        res.status(500).send(resp);
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const userID = req.body._id;
        const User = yield user_1.default.findById(userID);
        if (!User) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        }
        else {
            User.name = req.body.name;
            yield User.save();
            resp = { status: "success", message: "User Data Updated", data: {} };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "No result found", data: {} };
        res.status(500).send(resp);
    }
});
exports.updateUser = updateUser;
