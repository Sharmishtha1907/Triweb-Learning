import express from 'express';
//const UserController=require('../controllers/user');
const router=express.Router();

import {register,UpdateUser} from '../controllers/user';

router.post('/add',register);
router.post('/update',UpdateUser);

export default router;