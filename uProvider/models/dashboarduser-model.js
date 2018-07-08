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

	getPackageDetails: function(callback){
		var sql = "SELECT * FROM connection where username=?";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getPaymentList: function(callback){
		var sql = "SELECT * FROM payment where id=?";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	}
};