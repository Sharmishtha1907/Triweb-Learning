"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isauth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = __importDefault(require("../helper/error"));
const isauth = (req, res, next) => {
    try {
        const authheader = req.get("Authorization");
        if (!authheader) {
            const err = new error_1.default("You Are Not Authorized ");
            err.statusCode = 401;
            throw err;
            //res.status(401).send("Not Authorized");
        }
        const token = authheader.split(" ")[1];
        let decodedtoken;
        try {
            decodedtoken = jsonwebtoken_1.default.verify(token, "secretkey");
        }
        catch (error) {
            const err = new error_1.default("You are Not Authorized ");
            err.statusCode = 401;
            throw err;
        }
        if (!decodedtoken) {
            const err = new error_1.default("You Are Not Authorized ");
            err.statusCode = 401;
            throw err;
        }
        req.userId = decodedtoken.userId;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.isauth = isauth;
