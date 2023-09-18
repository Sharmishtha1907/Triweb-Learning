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
exports.publishQuiz = exports.deleteQuiz = exports.updateQuiz = exports.getQuiz = exports.createQuiz = void 0;
const quiz_1 = __importDefault(require("../model/quiz"));
const error_1 = __importDefault(require("../helper/error"));
const express_validator_1 = require("express-validator");
const createQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validationError = (0, express_validator_1.validationResult)(req);
        if (!validationError.isEmpty()) {
            const err = new error_1.default("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        const created_By = req.userId;
        const name = req.body.name;
        const question_list = req.body.question_list;
        const answers = req.body.answers;
        const Quiz = new quiz_1.default({ name, question_list, answers, created_By });
        const result = yield Quiz.save();
        const resp = {
            status: "success",
            message: "Quiz Created successfully",
            data: { quizId: result._id },
        };
        res.status(201).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.createQuiz = createQuiz;
const getQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.params.quizId;
        const Quiz = yield quiz_1.default.findById(quizId, {
            name: 1,
            question_list: 1,
            answers: 1,
            created_By: 1
        });
        if (!Quiz) {
            const err = new error_1.default("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== Quiz.created_By.toString()) {
            const err = new error_1.default("You are not authorized");
            err.statusCode = 403;
            throw err;
        }
        const resp = {
            status: "success",
            message: "Quiz Found",
            data: { Quiz: Quiz },
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.getQuiz = getQuiz;
const updateQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validationError = (0, express_validator_1.validationResult)(req);
        if (!validationError.isEmpty()) {
            const err = new error_1.default("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        const quizId = req.body.quizId;
        const Quiz = yield quiz_1.default.findById(quizId);
        if (!Quiz) {
            const err = new error_1.default("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== Quiz.created_By.toString()) {
            const err = new error_1.default("You are not authorized");
            err.statusCode = 403;
            throw err;
        }
        if (Quiz.is_published) {
            const err = new error_1.default("You cannot delete a published quiz");
            err.statusCode = 405;
            throw err;
        }
        Quiz.name = req.body.name;
        Quiz.question_list = req.body.question_list;
        Quiz.answers = req.body.answers;
        yield Quiz.save();
        const resp = {
            status: "success",
            message: "Quiz Updated Successfully",
            data: {},
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.updateQuiz = updateQuiz;
const deleteQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.params.quizId;
        const Quiz = yield quiz_1.default.findById(quizId);
        if (!Quiz) {
            const err = new error_1.default("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== Quiz.created_By.toString()) {
            const err = new error_1.default("You are not authorized");
            err.statusCode = 403;
            throw err;
        }
        if (Quiz.is_published) {
            const err = new error_1.default("You cannot update a published quiz");
            err.statusCode = 405;
            throw err;
        }
        yield quiz_1.default.deleteOne({ _id: quizId });
        const resp = {
            status: "success",
            message: "Quiz Deleted Successfully",
            data: {}
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteQuiz = deleteQuiz;
const publishQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizId = req.params.quizId;
        const Quiz = yield quiz_1.default.findById(quizId);
        if (!Quiz) {
            const err = new error_1.default("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (Quiz.is_published) {
            const err = new error_1.default("Quiz already Published");
            err.statusCode = 405;
            throw err;
        }
        Quiz.is_published = true;
        yield Quiz.save();
        const resp = {
            status: "success",
            message: "Quiz Published Successfully",
            data: {}
        };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
});
exports.publishQuiz = publishQuiz;
