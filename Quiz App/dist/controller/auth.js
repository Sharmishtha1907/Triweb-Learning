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
exports.isUserExist = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = __importDefault(require("../helper/error"));
const user_1 = __importDefault(require("../model/user"));
const express_validator_1 = require("express-validator");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        //Validation
        const validationError = (0, express_validator_1.validationResult)(req);
        if (!validationError.isEmpty()) {
            const err = new error_1.default("Validation Failed :(");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        //Validation
        const email = req.body.email;
        const name = req.body.name;
        let password = yield bcryptjs_1.default.hash(req.body.password, 12);
        const User = new user_1.default({ email, name, password });
        const result = yield User.save();
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        }
        else {
            resp = {
                status: "success",
                message: "Registeration done",
                data: { userId: result._id },
            };
            res.send(resp);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const email = req.body.email;
        const password = req.body.password;
        //find user
        const User = yield user_1.default.findOne({ email });
        if (User) {
            //res.send(resp);
            const status = yield bcryptjs_1.default.compare(password, User.password);
            if (status) {
                const token = jsonwebtoken_1.default.sign({ userId: User._id }, "secretkey", {
                    expiresIn: "1h",
                });
                resp = {
                    status: "success",
                    message: "Login Successful! :)",
                    data: { token: token },
                };
                res.send(resp);
            }
            else {
                const err = new error_1.default("Wrong username or password :(");
                err.statusCode = 401;
                throw err;
            }
        }
        else {
            const err = new error_1.default("Invalid Login");
            err.statusCode = 401;
            throw err;
        }
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
const isUserExist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    ;
    //find user
    const User = yield user_1.default.findOne({ email });
    if (!User) {
        return false;
    }
    return true;
});
exports.isUserExist = isUserExist;
