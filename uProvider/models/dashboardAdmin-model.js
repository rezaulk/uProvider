var db = require('./db');
module.exports = {
	getAll: function(callback){
		var sql = "SELECT * FROM package";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getAllUser: function(callback){
		var sql = "SELECT * FROM users";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getAllAdmin: function(callback){
		var sql = "SELECT * FROM users where usertype=?";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getAllPackages: function(callback){
		var sql = "SELECT * FROM package";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

    getAllPayment: function(callback){
		var sql = "SELECT * FROM payment";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},

	getConncetionId: function(id,callback){
		var sql = "SELECT * FROM connection where connectionid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result);
		});
	},

	getUserName: function(id,callback){
		var sql = "SELECT * FROM users where userid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},

	getPackageName: function(id,callback){
		var sql = "SELECT * FROM package where packageid=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},

	get: function(id, callback){
		var sql = "SELECT * FROM categories WHERE id=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},
	insert: function(category, callback){
		var sql = "INSERT INTO categories VALUES (null, ?, ?)";
		db.executeQuery(sql, [category.catname, category.desc], function(result){
			callback(result);
		});
	},

	insertpackage: function(category, callback){
		var sql = "INSERT INTO package VALUES (null, ?, ?,?)";
		db.executeQuery(sql, [package.packagename, package.price,package.speed], function(result){
			callback(result);
		});
	},
	update: function(id, name, description, callback){
		var sql = "UPDATE categories SET name=?, description=? WHERE id=?";
		db.executeQuery(sql, [name, description, id], function(result){
			callback(result);
		})
	}
};
