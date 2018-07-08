var db = require('./db');
module.exports = {
	validateUser: function(username, password, callback){
		var sql = "SELECT * FROM users WHERE username=? AND password=?";
		var sqlParam = [username, password];
		db.executeQuery(sql, sqlParam, function(result){
			if(!result)
			{
				callback(false);
			}
			else
			{
				//console.log(result);
			//session.usertype = result.usertype;
			  //Session["usertype"]=result[0].usertype;
			  var k=result[0].usertype;
			  //console.log(typeof(k));
                //console.log(result);
				callback(result.length != 0,k);
			}
		});
	}
};
