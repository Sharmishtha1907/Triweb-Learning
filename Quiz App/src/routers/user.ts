import express from 'express';
import {registerUser,getUser,updateUser,loginUser} from '../controller/user';
const router = express.Router();

router.post('/',registerUser);

router.post('/login',loginUser);

router.get('/:userId',getUser);

router.put('/',updateUser);

export default router;