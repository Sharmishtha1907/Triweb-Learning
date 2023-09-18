import express from "express";
const router = express.Router();
import  {startExam,submitExam} from "../controller/exam";
import { isauth } from "../middleware/isauth";

router.get("/:quizId",isauth,startExam);
router.post("/",isauth,submitExam);

export default router;