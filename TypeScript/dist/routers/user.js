"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const UserController=require('../controllers/user');
const router = express_1.default.Router();
const user_1 = require("../controllers/user");
router.post('/add', user_1.register);
router.post('/update', user_1.UpdateUser);
exports.default = router;
