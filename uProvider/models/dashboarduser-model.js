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

	getConnectionDetails: function(id,callback){
		var sql = "SELECT * FROM connection where userid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},

	getPaymentList: function(callback){
		var sql = "SELECT * FROM payment where id=?";
		db.executeQuery(sql, null, function(result){
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