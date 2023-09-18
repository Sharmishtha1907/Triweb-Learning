import express from 'express';
import {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz} from '../controller/quiz';
import { isauth } from "../middleware/isauth";
import {body} from "express-validator";

const router=express.Router();

router.post("/",isauth,[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:3})
    .withMessage("Name shoud atleast have 3 characters"),
    body('question_list').custom(question_list=>{
         if(question_list.length == 0){
            return Promise.reject("Atleast one question is required!");
         }
         return true;
    }),
    body('answers').custom(answers=>{
        if(Object.keys(answers).length == 0){
           return Promise.reject("Answers should not be empty!");
        }
        return true;
   })
],
createQuiz);

router.get("/:quizId?",isauth,getQuiz);

router.put("/",isauth,[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:3})
    .withMessage("Name shoud atleast have 3 characters"),
    body('question_list').custom(question_list=>{
         if(question_list.length == 0){
            return Promise.reject("Atleast one question is required!");
         }
         return true;
    }),
    body('answers').custom(answers=>{
        if(Object.keys(answers).length == 0){
           return Promise.reject("Answers should not be empty!");
        }
        return true;
   })
],updateQuiz);

router.delete("/:quizId",isauth,deleteQuiz)

router.patch("/:quizId",isauth,publishQuiz);


export default router;
