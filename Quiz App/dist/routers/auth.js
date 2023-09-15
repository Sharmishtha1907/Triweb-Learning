"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controller/auth");
const error_1 = __importDefault(require("../helper/error"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
//POST /auth/
router.post('/', [
    (0, express_validator_1.body)('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage("Name shoud atleast have 6 characters"),
    (0, express_validator_1.body)('email')
        .trim()
        .isEmail()
        .custom(emailId => {
        return (0, auth_1.isUserExist)(emailId)
            .then((status => {
            if (status) {
                const err = new error_1.default("User already exists");
                err.statusCode = 422;
                throw err;
                //return Promise.reject("User already exists");
            }
        }))
            .catch((err => {
            return Promise.reject(err);
        }));
    })
        .normalizeEmail()
], auth_1.registerUser);
//POST /auth/login/
router.post('/login', auth_1.loginUser);
exports.default = router;
