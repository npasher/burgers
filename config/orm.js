const connection=require('./connection.js');

let orm={
	selectAll:function(table,cb){
		let query="SELECT * FROM "+table;
		connection.query(query,function(err,data){
			if (err) throw err;
			cb(data);
		});
	},
	insertOne:function(table, colName1,colName2,colValue1,colValue2,cb){
		let query= "INSERT INTO "+table+" (" +colName1+", "+colName2+") ";
		query += "VALUES('"+colValue1+"', "+colValue2+")";
		console.log(query);
		connection.query(query,function(err,result){
			if (err) throw err;
			cb(result);
		});
	},
	updateOne:function(table,colName,colValue,id,cb){
		let query="UPDATE "+table;
		query += " SET "+colName+" = "+colValue+" WHERE id = "+id;
		console.log(query);
		connection.query(query,function(err,result){
			if (err) throw err;
			cb(result);
		});
	},
	deleteOne:function(table,id,cb){
		let query="DELETE FROM "+table;
		query += " WHERE id = "+id;
		connection.query(query,function(err,result){
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports=orm;