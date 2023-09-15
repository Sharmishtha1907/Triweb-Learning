import express, { NextFunction } from "express";
import mongoose from "mongoose";

import UserRoute from "./routers/user";
import authRoute from "./routers/auth";

import ProjectError from "./helper/error";

import { Request, Response } from "express";

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

app.use(
  (err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    interface ReturnResponse {
      status: "success" | "error";
      message: String;
      data: {};
    }

    let message: String;
    let statusCode: number;
    let data;

    if (!!err.statusCode && err.statusCode < 500) {
      message = err.message;
      statusCode = err.statusCode;
    } else {
      message = "Some technical issue occured";
      statusCode = 500;
    }
    let resp: ReturnResponse = { status: "error", message: message, data: {} };
    if (!!err.data) {
      resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
  }
);

mongoose.connect(connectionString).catch((error) => {
  console.log(error);
  return;
});

app.listen(process.env.PORT, () => {
  console.log("server connected");
});
