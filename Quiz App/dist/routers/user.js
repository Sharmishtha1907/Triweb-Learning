"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const isauth_1 = require("../middleware/isauth");
const router = express_1.default.Router();
router.get("/:userId", isauth_1.isauth, user_1.getUser);
router.put("/", isauth_1.isauth, user_1.updateUser);
exports.default = router;
