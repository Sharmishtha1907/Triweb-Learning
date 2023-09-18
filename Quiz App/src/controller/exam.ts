import { Request, Response, NextFunction } from "express";
import quiz from "../model/quiz";
import result from "../model/result";
import ProjectError from "../helper/error";

interface ReturnResponse {
    status: "success" | "error";
    message: String;
    data: {};
  }

const startExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId;
    const Quiz = await quiz.findById(quizId, {
      name: 1,
      question_list: 1,
      is_published: 1,
    });
    if (!Quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (Quiz.is_published == false) {
      const err = new ProjectError("You cannot attempt an unpublished quiz");
      err.statusCode = 405;
      throw err;
    }
    const resp: ReturnResponse = {
        status: "success",
        message: "Quiz Started",
        data: Quiz
      };
      res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const submitExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.body.quizId;
    const attempted_questions = req.body.attempted_questions;
    const Quiz = await quiz.findById(quizId, { answers: 1 });
    if (!Quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (Quiz.is_published == false) {
      const err = new ProjectError("You cannot attempt an unpublished quiz");
      err.statusCode = 405;
      throw err;
    }
    const answers = Quiz.answers;
    const userId = req.userId;
    const allques = Object.keys(answers);
    let score = 0;
    const total = allques.length;
    for (let i = 0; i < total; i++) {
        let quesno=allques[i];
        if(!!attempted_questions[quesno] && answers[quesno]==attempted_questions[quesno])
        {
            score=score+1;
        }
    }
    const report = new result({ userId, quizId, score, total });
    const data= await report.save();
    const resp: ReturnResponse = {
        status: "success",
        message: "Quiz Submitted",
        data: {total,score,resultId:data._id}
      };
      res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

export { startExam, submitExam };
