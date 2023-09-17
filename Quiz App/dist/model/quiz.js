"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const quizSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    question_list: [
        {
            question_number: {
                type: Number,
                required: true
            },
            question: String,
            options: {},
        },
    ],
    answers: {},
    created_By: {
        type: mongoose_1.default.Types.ObjectId,
        required: true
    },
    is_published: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const quiz = mongoose_1.default.model("quiz", quizSchema);
exports.default = quiz;
