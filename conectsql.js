var express = require('express');
var bodyParser = require('body-parser'); 
var mysql = require('mysql');
var oApp = express(); 
oApp.use(bodyParser.json());
oApp.use(bodyParser.urlencoded({ extended: true })); 
var oMyConnection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: '',
     database: 'habitaciones'
});
oApp.get('/habitacion', function(oReq, oRes) {
   var sSQLGetAll = "SELECT * FROM dt_habitacion";
   oMyConnection.query(sSQLGetAll, function(oError, oRows, oCols) {
     if(oError) {
       oRes.write(JSON.stringify({
         error: true,
         error_object: oError         
       }));
       oRes.end();
     } else {
       oRes.write(JSON.stringify(oRows));
       oRes.end();       
     }
   });
});
 
function CreateHabitacion(oDataHabitacion, oResponse) {    // , DateEntree, DateSortie
  var sSQLCreate = "INSERT INTO dt_habitacion (Etage, NombreHabitacion, Prix, Estatus) VALUES (NULL, ";
  sSQLCreate += "'" + oDataHabitacion.etage + "', ";
  sSQLCreate += "'" + oDataHabitacion.nombreHabitacion + "', ";
  sSQLCreate += "'" + oDataHabitacion.prix + "', ";
  sSQLCreate += "'" + oDataHabitacion.estatus + "' ) ";
  // sSQLCreate += "'" + oDataHabitacion.peso + "', ";
  // sSQLCreate += "NOW())";
  /*
   {'oDataHabitacion.Etage':'1'
 'oDataHabitacion.NombreHabitacion':'1'
'oDataHabitacion.Prix':'1'
'oDataHabitacion.Estatus':'1'}
  */
    
  oMyConnection.query(sSQLCreate, function(oError, oRows, oCols) {
    if(oError) {
      oResponse.write(JSON.stringify({
        error: true,
        error_object: oError
      }));
      oResponse.end();      
    } else {
      var iIDCreated = oRows.insertId;
      oResponse.write(JSON.stringify({
        error: false,
        idCreated: iIDCreated
      }));
      oResponse.end();      
    }    
  });
} 
 
function ReadHabitacion(oResponse) {
  var sSQLRead = "SELECT * FROM dt_habitacion";
  oMyConnection.query(sSQLRead, function(oError, oRows, oCols) {
    if(oError) {
      oResponse.write(JSON.stringify({
        error: true,
        error_object: oError
      }));
      oResponse.end();
    } else {
      oResponse.write(JSON.stringify({
        error: false,
        data: oRows
      }));
      oResponse.end();            
    }    
  });    
}
function UpdateHabitacion(oDataHabitacion, oResponse) {
  var sSQLUpdate = "UPDATE dt_habitacion SET last_updated = NOW() ";
  if(oDataHabitacion.hasOwnProperty('nombre')) {
    sSQLUpdate += " AND nombre = '" + oDataHabitacion.nombre + "' ";
  }
  if(oDataHabitacion.hasOwnProperty('raza')) {
    sSQLUpdate += " AND raza = '" + oDataHabitacion.raza + "' ";
  }
  if(oDataHabitacion.hasOwnProperty('color')) {
    sSQLUpdate += " AND color = '" + oDataHabitacion.color + "' ";
  }
  if(oDataHabitacion.hasOwnProperty('edad')) {
    sSQLUpdate += " AND edad = '" + oDataHabitacion.edad + "' ";
  }
  if(oDataHabitacion.hasOwnProperty('peso')) {
    sSQLUpdate += " AND peso = '" + oDataHabitacion.peso + "' ";    
  }    
  sSQLUpdate = " WHERE iddt_habitacion = '" + oDataHabitacion.iddt_habitacion + "'";
  
  oMyConnection.query(sSQLUpdate, function(oErrUpdate, oRowsUpdate, oColsUpdate) {
    if(oErrUpdate) {
      oResponse.write(JSON.stringify({ 
        error: true,
        error_object: oErrUpdate
      }));
      oResponse.end();      
    } else {
      oResponse.write(JSON.stringify({
        error: false
      }));
      oResponse.end();
    }
  });
}
function DeleteHabitacion(oDataHabitacion, oResponse) {
  var sSQLDelete = "DELETE FROM dt_habitacion WHERE iddt_habitacion = '" + oDataHabitacion.iddt_habitacion + "'";
  oMyConnection.query(sSQLDelete, function(oErrDelete, oRowsDelete, oColsDelete) {
    if(oErrDelete) {
      oResponse.write(JSON.stringify({
        error: true,
        error_object: oErrDelete
      }));
      oResponse.end();
    } else {
      oResponse.write(JSON.stringify({
        error: false
      }));
      oResponse.end();      
    }    
  });  
}
 
 oApp.post('/habitation', function(oReq, oRes) {
   var oDataOP = {};
   var sOP = '';
   
   console.log(oReq.route);

   oDataOP = oReq.body.data_op;
   sOP = oReq.body.op;

   switch(sOP) {
     
     case 'CREATE':      
      CreateHabitacion(oDataOP, oRes);
     break;
     
     case 'READ':
      ReadHabitacion(oRes);
     break;
     
     case 'UPDATE':
      UpdateHabitacion(oDataOP, oRes);
     break;
     
     case 'DELETE':
      DeleteHabitacion(oDataOP, oRes);
     break;
     
     default:
      oRes.write(JSON.stringify({ 
        error: true, 
        error_message: 'Debes proveer una operación a realizar'
      }));
      oRes.end();
     break;
   }   
 });
 
 oApp.listen(9016, function(oReq, oRes) {
   console.log("Servicios web gestión entidad Habitacion activo, en puerto 9016");   
 });





