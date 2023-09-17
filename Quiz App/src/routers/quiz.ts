import express from 'express';
import {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz} from '../controller/quiz';
import { isauth } from "../middleware/isauth";

const router=express.Router();

router.post("/",isauth,createQuiz);

router.get("/:quizId",isauth,getQuiz);

router.put("/",isauth,updateQuiz);

router.delete("/:quizId",isauth,deleteQuiz)

router.patch("/:quizId",isauth,publishQuiz);


export default router;
