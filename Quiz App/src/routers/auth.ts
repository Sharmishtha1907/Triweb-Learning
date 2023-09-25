import express from "express";
import { registerUser, loginUser,isUserExist } from "../controller/auth";

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
    .custom((emailId:String)=>{
        return isUserExist(emailId)
        .then((status=>{
            if(status){
                return Promise.reject("User Exists");
              //return Promise.reject("User already exists");
            }
        }))
        .catch((err=>{
            return Promise.reject(err);
        }));

    }),
    body('password')
    .trim()
    .isLength({min:8})
    .withMessage("Password must have 8 characters"),
    body('confirm_password')
    .trim()
    .custom((value:String,{req})=>{
        if(value!=req.body.password){
            return Promise.reject("Password does not match");
        }
        return true;
    })
], registerUser);

//POST /auth/login/
router.post('/login', loginUser);

export default router;
