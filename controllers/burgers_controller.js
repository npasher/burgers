const express=require("express");
const burger=require("../models/burger.js");//Import burger.js to use database functions.//
const router=express.Router();
//Creation of routes.//
router.get("/", function(req,res){
	burger.all(function(data){
		let burgerObj = {
			burger: data
		};
		res.render("index",burgerObj);
	});
});
//Create.//
router.post("/api/burgers",function(req,res){
	let burgerName = req.body.burger;
	burger.create("burger_name", "devoured", burgerName,false,function(data){
		res.json(data);
	});
});
//Update.//
router.put("/api/burgers/:id",function(req,res){
	let id = req.params.id;
	burger.update(id,function(data){
		res.json(data);
	});
});
//Delete.//
router.delete("/api/burgers/:id",function(req,res){
	let id = req.params.id;
	burger.delete(id,function(data){
		res.json(data);
	});
});
module.exports = router;