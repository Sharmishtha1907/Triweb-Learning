import express from "express";
import { getUser, updateUser } from "../controller/user";
import { isauth } from "../middleware/isauth";


const router = express.Router();

router.get("/:userId", isauth, getUser);

router.put("/", isauth, updateUser);

export default router;
