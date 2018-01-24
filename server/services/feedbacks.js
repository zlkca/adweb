//----------------------------------------------------
// Author:	Martin.Zhang
// Date:  	Jan 13 2018
// All right reserved.
//----------------------------------------------------

'use strict';

var DB = require('../database/mysql');

module.exports = function(){
	
	var _db = DB();

	return {
		
		//--------------------------------------------------------------------------------------
		//	insert() http post handler
		// Arguments:
		// 		req --- req object, eg {body:{query:{from:'A', to:'B'}}}
		//--------------------------------------------------------------------------------------
		insert: function(req, rsp){
			var body = req.body;

			_db.insert('feedbacks', body, function(err, results, fields){
				 return rsp.json({ success: true, 'feedbacks': results});
			});
		}
	}
}