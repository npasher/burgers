const orm=require('../config/orm.js');

let burger={
	all:function(cb){
		orm.selectAll("burgers",function(res){
			cb(res);
		});
	},
	create:function(colName1,colName2,colValue1,colValue2,cb){
		orm.insertOne("burgers",colName1,colName2,colValue1,colValue2,function(res){
			cb(res);
		});
	},

	update:function(id,cb){
		orm.updateOne("burgers","devoured","!devoured",id,function(res){
			cb(res);
		});
	},

	delete:function(id,cb){
		orm.deleteOne("burgers",id,function(res){
			cb(res);
		});
	}
};
// Export database functions for burgers_controller.js .//
module.exports=burger;