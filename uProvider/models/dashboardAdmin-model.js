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

	getAllPackages: function(callback){
		var sql = "SELECT * FROM package";
		db.executeQuery(sql, null, function(result){
			callback(result);
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
	update: function(id, name, description, callback){
		var sql = "UPDATE categories SET name=?, description=? WHERE id=?";
		db.executeQuery(sql, [name, description, id], function(result){
			callback(result);
		})
	}
};
