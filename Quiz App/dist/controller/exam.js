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
exports.submitExam = exports.startExam = void 0;
const quiz_1 = __importDefault(require("../model/quiz"));
const report_1 = __importDefault(require("../model/report"));
const error_1 = __importDefault(require("../helper/error"));
const startExam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.params.quizId;
        const Quiz = yield quiz_1.default.findById(quizId, {
            name: 1,
            question_list: 1,
            is_published: 1,
        });
        if (!Quiz) {
            const err = new error_1.default("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (Quiz.is_published == false) {
            const err = new error_1.default("You cannot attempt an unpublished quiz");
            err.statusCode = 405;
            throw err;
        }
        const resp = {
            status: "success",
            message: "Quiz Started",
            data: Quiz
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.startExam = startExam;
const submitExam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.body.quizId;
        const attempted_questions = req.body.attempted_questions;
        const Quiz = yield quiz_1.default.findById(quizId, { answers: 1 });
        if (!Quiz) {
            const err = new error_1.default("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (Quiz.is_published == false) {
            const err = new error_1.default("You cannot attempt an unpublished quiz");
            err.statusCode = 405;
            throw err;
        }
        const answers = Quiz.answers;
        const userId = req.userId;
        const allques = Object.keys(answers);
        let score = 0;
        const total = allques.length;
        for (let i = 0; i < total; i++) {
            let quesno = allques[i];
            if (!!attempted_questions[quesno] && answers[quesno] == attempted_questions[quesno]) {
                score = score + 1;
            }
        }
        const report = new report_1.default({ userId, quizId, score, total });
        const data = yield report.save();
        const resp = {
            status: "success",
            message: "Quiz Submitted",
            data: { total, score, resultId: data._id }
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.submitExam = submitExam;
