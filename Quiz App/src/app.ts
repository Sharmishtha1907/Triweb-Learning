import express, { NextFunction } from "express";
import mongoose from "mongoose";

import UserRoute from "./routers/user";
import authRoute from "./routers/auth";
import quizRoute from "./routers/quiz";
import examRoute from "./routers/exam";

import { Request, Response } from "express";
import Error from "./helper/error";

const app = express();
const connectionString =
  "mongodb+srv://beinggarffield:Shanu@prac.mb0f7y3.mongodb.net/workshop?retryWrites=true&w=majority";
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Shanu");
});

declare global {
  namespace Express {
    interface Request {
      userId: String;
    }
  }
}

//Redirect /user

app.use("/user", UserRoute);

app.use("/auth", authRoute);

//Redirect /quiz
app.use("/quiz", quizRoute);

app.use("/exam", examRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  interface ReturnResponse {
    status: "success" | "error";
    message: String;
    data: {};
  }

  let mess: String;
  let statusCode: number;
  let data;

  if (!!err.statusCode && err.statusCode < 500) {
    mess = err.message;
    statusCode = err.statusCode;
  } else {
    mess = "Some technical issue occured";
    statusCode = 500;
  }
  let resp: ReturnResponse = { status: "error", message: mess, data: {} };
  if (!!err.data) {
    resp.data = err.data;
  }
  console.log(err.statusCode, err.message);
  res.status(statusCode).send(resp);
});

mongoose.connect(connectionString).catch((error) => {
  console.log(error);
  return;
});

app.listen(process.env.PORT, () => {
  console.log("server connected");
});
