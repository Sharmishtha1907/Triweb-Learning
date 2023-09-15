import { Request, Response, NextFunction } from "express";

import user from "../model/user";

import Error from "../helper/error";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;
  console.log(req.userId);
  try {
    const userID = req.params.userId;
    if (req.userId != req.params.userId) {
      const err = new Error("Function not allowed");
      err.statusCode = 401;
      throw err;
    }
    const User = await user.findById(userID, { name: 1, email: 1 });
    if (!User) {
      const err = new Error("User does not  Exist");
      err.statusCode = 401;
      throw err;
    } else {
      resp = { status: "success", message: "User Found", data: { user: User } };
      res.status(200).send(resp);
    }
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;

  try {
    const userID = req.body._id;
    if (req.userId != req.body._id) {
      const err = new Error("Function not allowed");
      err.statusCode = 101;
      throw err;
    }
    const User = await user.findById(userID);
    if (!User) {
      const err=new Error(" User not found");
      err.statusCode=401;
      throw err;
    } else {
      User.name = req.body.name;
      await User.save();
      resp = { status: "success", message: "User Data Updated", data: {} };
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
};

export { getUser, updateUser };
