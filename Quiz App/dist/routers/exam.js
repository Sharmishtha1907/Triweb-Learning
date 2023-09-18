"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const exam_1 = require("../controller/exam");
const isauth_1 = require("../middleware/isauth");
router.get("/:quizId", isauth_1.isauth, exam_1.startExam);
router.post("/", isauth_1.isauth, exam_1.submitExam);
exports.default = router;
