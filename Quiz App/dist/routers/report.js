"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const report_1 = require("../controller/report");
const isauth_1 = require("../middleware/isauth");
const router = express_1.default.Router();
router.get('/:reportId?', isauth_1.isauth, report_1.getReport);
//router.get('/:')
exports.default = router;
