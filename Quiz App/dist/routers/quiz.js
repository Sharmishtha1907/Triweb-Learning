"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quiz_1 = require("../controller/quiz");
const isauth_1 = require("../middleware/isauth");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router.post("/", isauth_1.isauth, [
    (0, express_validator_1.body)('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage("Name shoud atleast have 3 characters"),
    (0, express_validator_1.body)('question_list').custom(question_list => {
        if (question_list.length == 0) {
            return Promise.reject("Atleast one question is required!");
        }
        return true;
    }),
    (0, express_validator_1.body)('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Answers should not be empty!");
        }
        return true;
    })
], quiz_1.createQuiz);
router.get("/:quizId?", isauth_1.isauth, quiz_1.getQuiz);
router.put("/", isauth_1.isauth, [
    (0, express_validator_1.body)('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage("Name shoud atleast have 3 characters"),
    (0, express_validator_1.body)('question_list').custom(question_list => {
        if (question_list.length == 0) {
            return Promise.reject("Atleast one question is required!");
        }
        return true;
    }),
    (0, express_validator_1.body)('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Answers should not be empty!");
        }
        return true;
    })
], quiz_1.updateQuiz);
router.delete("/:quizId", isauth_1.isauth, quiz_1.deleteQuiz);
router.patch("/:quizId", isauth_1.isauth, quiz_1.publishQuiz);
exports.default = router;
