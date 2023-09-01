const express=require('express');
const router=express.Router();
const calculatorController=require('../controller/calculator');

router.post('/add',calculatorController.add);
router.post('/sub',calculatorController.sub);
router.post('/mul',calculatorController.mul);
router.post('/div',calculatorController.div);

module.exports = router;