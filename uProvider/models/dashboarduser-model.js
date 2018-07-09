var db = require('./db');
module.exports = {
	getAll: function(callback){
		var sql = "SELECT * FROM package";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getUser: function(callback){
		var sql = "SELECT * from users where id=?";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},


	getPackageId: function(username,callback){
		var sql = "SELECT * from connection where username=?";
		db.executeQuery(sql, [username],function(result){
			callback(result[0]);
		});
	},

	getPackageDetails: function(id,callback){
		var sql = "SELECT * FROM package where packageid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},

	getAllPackages: function(callback){
		var sql = "SELECT * FROM package";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getConnectionDetails: function(id,callback){
		var sql = "SELECT * FROM connection where userid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},

	getPaymentList: function(callback){
		var sql = "SELECT * FROM payment";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});

	},

	update: function(update, callback){
		var sql = "UPDATE connection SET packageid = ? WHERE userid = ?";
		db.executeQuery(sql, null, function(result){
			console.log(result);
			callback(result);
		});
	},

	getUserId: function(username,callback)
	{
		var sql = "SELECT * from users where username=?";
		db.executeQuery(sql, [username], function(result){
			callback(result[0]);
		});

	}
};