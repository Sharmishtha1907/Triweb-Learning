const express = require('express');
const userController=require('../controller/user');
const router = express.Router();

router.post('/register',userController.register);
router.post('/get',userController.register);
router.post('/update',userController.register);
router.post('/delete',userController.register);

module.exports = router;