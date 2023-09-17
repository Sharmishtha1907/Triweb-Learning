"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controller/auth");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
//POST /auth/
router.post('/', [
    (0, express_validator_1.body)('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage("Name shoud atleast have 3 characters"),
    (0, express_validator_1.body)('email')
        .trim()
        .isEmail()
        .custom((emailId) => {
        return (0, auth_1.isUserExist)(emailId)
            .then((status => {
            if (status) {
                return Promise.reject("User Exists");
                //return Promise.reject("User already exists");
            }
        }))
            .catch((err => {
            return Promise.reject(err);
        }));
    })
        .normalizeEmail(),
    (0, express_validator_1.body)('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password must have 8 characters"),
    (0, express_validator_1.body)('confirm_password')
        .trim()
        .custom((value, { req }) => {
        if (value != req.body.password) {
            return Promise.reject("Password does not match");
        }
        return true;
    })
], auth_1.registerUser);
//POST /auth/login/
router.post('/login', auth_1.loginUser);
exports.default = router;
