import express from 'express';
import { getReport } from '../controller/report';
import { isauth } from "../middleware/isauth";
const router=express.Router();

router.get('/:reportId?',isauth,getReport);

//router.get('/:')

export default router;
