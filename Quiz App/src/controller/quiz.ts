import { Request, Response, NextFunction } from "express";
import quiz from "../model/quiz";
import ProjectError from "../helper/error";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const created_By = req.userId;
    const name = req.body.name;
    const question_list = req.body.question_list;
    const answers = req.body.answers;
    const Quiz = new quiz({ name, question_list, answers, created_By });
    const result = await Quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz Created successfully",
      data: { quizId: result._id },
    };
    res.status(201).send(resp);
  } catch (error) {
    next(error);
  }
};

const getQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId;
    const Quiz = await quiz.findById(quizId, {
      name: 1,
      question_list: 1,
      answers: 1,
      created_By:1
    });
    if (!Quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (req.userId !== Quiz.created_By.toString()) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 403;
      throw err;
    }
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz Found",
      data: { Quiz: Quiz },
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.body.quizId;
    const Quiz = await quiz.findById(quizId);
    if (!Quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (req.userId !== Quiz.created_By.toString()) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 403;
      throw err;
    }
    Quiz.name = req.body.name;
    Quiz.question_list = req.body.question_list;
    Quiz.answers = req.body.answers;

    await Quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz Updated Successfully",
      data: {},
    };

    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId;
    const Quiz = await quiz.findById(quizId);
    if (!Quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    console.log(req.userId,Quiz.created_By);
    if (req.userId !== Quiz.created_By.toString()) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 403;
      throw err;
    }
    await quiz.deleteOne({ _id: quizId });
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz Deleted Successfully",
      data: {},
    };

    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const publishQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId;
    const Quiz = await quiz.findById(quizId);
    if (!Quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (Quiz.is_published) {
      const err = new ProjectError("Quiz already Published");
      err.statusCode = 103;
      throw err;
    }
    Quiz.is_published = true;
    await Quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz Published Successfully",
      data: {},
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz };
