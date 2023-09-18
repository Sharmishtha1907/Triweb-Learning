import report from "../model/report";
import { Request, Response, NextFunction } from "express";
import ProjectError from "../helper/error";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const getReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let Report;
    if (!!req.params.reportId) {
      const reportId = req.params.reportId;
      Report = await report.findById(req.params.reportId);
      if (!Report) {
        const err = new ProjectError("Report not found");
        err.statusCode = 404;
        throw err;
      }
    if (Report.userId.toString() !== req.userId) {
        const err = new ProjectError("Function not allowed");
        err.statusCode = 405;
        throw err;
    }
    } else {
      Report = await report.find({userId:req.userId});
    }
    if (!Report) {
        const err = new ProjectError("Report not found");
        err.statusCode = 404;
        throw err;
      }
    
    let resp: ReturnResponse;
    resp = { status: "success", message: "User Report Found", data: Report };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

export { getReport };
