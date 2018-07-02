var query=require("./query.js");  
 
exports.save  = function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    query("insert into  air_position ", [1], function(err,results,fields){  
        //do something  
    });
}
