var mysql=require("mysql");

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'nodejs'
  });

  connection.connect(function(error){
      if(error)
      throw error;
      console.log("Bağlantı sağlandı");

  })

  module.exports=connection;