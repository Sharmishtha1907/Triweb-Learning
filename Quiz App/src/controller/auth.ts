import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Error from "../helper/error";
import user from "../model/user";
import { validationResult } from 'express-validator';

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let resp: ReturnResponse;
  try {
    //Validation
     const validationError= validationResult(req);
     if(!validationError.isEmpty()){
        const err = new Error("Validation Failed :(");
        err.statusCode = 422;
        err.data=validationError.array();
        throw err;
     }
    //Validation
    const email = req.body.email;
    const name = req.body.name;
    let password = await bcrypt.hash(req.body.password, 12);

    const User = new user({ email, name, password });

    const result = await User.save();
    if (!result) {
      resp = { status: "error", message: "No result found", data: {} };
      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registeration done",
        data: { userId: result._id },
      };
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;
  try {
    const email = req.body.email;
    const password = req.body.password;
    //find user
    const User = await user.findOne({ email });

    if (User) {
      //res.send(resp);
      const status = await bcrypt.compare(password, User.password);
      if (status) {
        const token = jwt.sign({ userId: User._id }, "secretkey", {
          expiresIn: "1h",
        });
        resp = {
          status: "success",
          message: "Login Successful! :)",
          data: { token: token , userId:User._id},
        };
        res.send(resp);
      } else {
        const err = new Error("Wrong username or password :(");
        err.statusCode = 401;
        throw err;
      }
    } else {
      const err = new Error("Invalid Login");
      err.statusCode = 401;
      throw err;
    }
  } catch (error) {
    next(error);
  }

};

const isUserExist=async (email:String) =>{
;
    //find user
    const User = await user.findOne({email});
    if(!User){
       return false;
    }
    return true;
    
}

export { registerUser, loginUser,isUserExist };
