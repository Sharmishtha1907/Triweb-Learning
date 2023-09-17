"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quiz_1 = require("../controller/quiz");
const isauth_1 = require("../middleware/isauth");
const router = express_1.default.Router();
router.post("/", isauth_1.isauth, quiz_1.createQuiz);
router.get("/:quizId", isauth_1.isauth, quiz_1.getQuiz);
router.put("/", isauth_1.isauth, quiz_1.updateQuiz);
router.delete("/:quizId", isauth_1.isauth, quiz_1.deleteQuiz);
router.patch("/:quizId", isauth_1.isauth, quiz_1.publishQuiz);
exports.default = router;
