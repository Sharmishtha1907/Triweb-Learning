import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Error from "../helper/error";

const isauth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authheader = req.get("Authorization");
    if (!authheader) {
      const err = new Error("You Are Not Authorized ");
      err.statusCode = 401;
      throw err;

      //res.status(401).send("Not Authorized");
    }
    const token = authheader.split(" ")[1];
    let decodedtoken: { userId: String; iat: Number; exp: Number };
    try {
      decodedtoken = <any>jwt.verify(token, "secretkey");
    } catch (error) {
      const err = new Error("You are Not Authorized ");
      err.statusCode = 401;
      throw err;
    }

    if (!decodedtoken) {
      const err = new Error("You Are Not Authorized ");
      err.statusCode = 401;
      throw err;
    }
    req.userId = decodedtoken.userId;
    next();
  } catch (error) {
    next(error);
  }
};

export { isauth };
