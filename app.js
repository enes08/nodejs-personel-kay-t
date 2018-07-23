var connection=require("./connection");

var argv=require("yargs")
.command("create","Personel oluşturue",function(yargs){

    yargs.option({
        name:{
            require:true,
            description:"Personel Adını giriniz",
            alias:"n",
            type:"string"


        },
        surname:{
            require:true,
            description:"Personel soy adını giriniz",
            alias:"s",
            type:"string"

        },
        email:{
            require:true,
            description:"Personel Email  giriniz",
            alias:"m",
            type:"string"

        }
    }).help("help")
}).command("get","Tüm Pesonelleri getirir",function(yargs){

}).command("delete","id ye göre kullanıcı siler",function(yargs){

    yargs.option({
        id:{
            require:true,
            description:"Personel id sini giriniz",
            alias:"i",
            type:"string"

        }

    }).help("help");
}).help("help").argv;

var command=argv._[0];

 if(command === 'create' && typeof argv.name !== 'undefined' && argv.name.length>0 && typeof argv.surname !== 'undefined' && argv.surname.length>0&& typeof argv.email !== 'undefined'&& argv.email.length>0){
    
    
    var personel={
        name:argv.name,
        surname:argv.surname,
        email:argv.email
    }
    
    instertPersonel(personel);
    

}
else if(command === 'delete' && typeof argv.id !== 'undefined' && argv.id.length>0){
   
    deletePersonel(argv.id);


}
else if(command === 'get'){
   
    getPersonels();


}
else{
    console.log("lütfen geçerli bir komut giriniz");

}


function instertPersonel(personel){

    connection.query('INSERT INTO personel SET ?', personel,function(error,result){

        connection.on('error', function(err) {
            console.log("[mysql error]",err);
          });
        console.log("Ekleme işlemi Başarılı oldu");

    })

}

function getPersonels(){

    connection.query('SELECT * from personel', function (error, results, fields) {
        if (error) throw error;
        // connected!
        console.log(results);

    
      });

}


function deletePersonel(id){

    connection.query("DELETE from personel WHERE id="+id, function (error, results, fields) {
        if (error) throw error;
        // connected!
    
        console.log("SİLME İŞLEMİ BAŞARILI"+results.affectedRows);
      });

}

 



