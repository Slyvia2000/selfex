const express=require('express');
var router=express.Router();
router.get('/list',function(req,res){
	res.send('这是用户模块下的列表');
});
module.exports=router;