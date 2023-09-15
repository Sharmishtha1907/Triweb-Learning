import express from "express";
import { registerUser, loginUser,isUserExist } from "../controller/auth";
import Error from '../helper/error';
import {body} from 'express-validator';
const router = express.Router();

//POST /auth/
router.post('/',[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:3})
    .withMessage("Name shoud atleast have 3 characters"),
    body('email')
    .trim()
    .isEmail()
    .custom(emailId=>{
        return isUserExist(emailId)
        .then((status=>{
            if(status){
                const err= new Error("User already exists");
                err.statusCode=422;
                throw err;
              //return Promise.reject("User already exists");
            }
        }))
        .catch((err=>{
            return Promise.reject(err);
        }));

    })
    .normalizeEmail(),
    body('password')
    .trim()
    .isLength({min:8})
    .withMessage("Password must have 8 characters"),
    body('confirm_password')
    .trim()
    .custom((value,{req})=>{
        if(value!=req.body.password){
            return Promise.reject("Password does not match");
        }
    })
], registerUser);

//POST /auth/login/
router.post('/login', loginUser);

export default router;
