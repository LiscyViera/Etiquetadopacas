var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'prueba_db',
  user: 'root',
  password: 'password'
});

conexion.connect((error) =>{
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.stack);
    return;
  } else {
    console.log('Conexión a la base de datos exitosa.');
  }

});

conexion.query('SELECT * FROM prueba_db.tabla_prueba', function(error, results, fields){
  if(error)
  throw error;

  results.forEach(results => {
    console.log(results);
  });

});

conexion.end();