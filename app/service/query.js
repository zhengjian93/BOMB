var mysql  = require('mysql');
var pool = mysql.createPool({  
    host: 'localhost',  
    user: 'root',  
    password: 'Zqcloud#1',  
    database: 'BOMB',  
    port: 3307  
}); 
 
exports.query = function (req, res) {
    pool.getConnection(function(err,conn){  
        if(err){  
            callback(err,null,null);  
        }else{  
            conn.query(sql,function(qerr,vals,fields){  
                //释放连接  
                conn.release();  
                //事件驱动回调  
                callback(qerr,vals,fields);  
            });  
        }  
    });  
}    

