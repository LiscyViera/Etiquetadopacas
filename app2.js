const express = require('express');
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

// Crear una instancia de express
const app = express();

// Configurar middleware para manejar datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar ruta para enviar datos del formulario a la base de datos
app.post('/registro', (req, res) => {
  const { n_paca, variedad, clase, peso_humedo, peso_despalillo, gavillas_funda, gavilla_paca, prom_gavillas, n_tickets, fecha_elaboracion } = req.body;
  const query = `INSERT INTO ticket_gavilla (n_paca, variedad, clase, peso_humedo, peso_despalillo, gavillas_funda, gavilla_paca, prom_gavillas, n_tickets, fecha_elaboracion) VALUES (?, ?, ?)`;
  connection.query(query, [n_paca, variedad, clase, peso_humedo, peso_despalillo, gavillas_funda, gavilla_paca, prom_gavillas, n_tickets, fecha_elaboracion], (error, res) => {
    if (error) {
      console.log('Error al insertar datos:', error);
      res.status(500).send('Error al insertar datos');
    } else {
      console.log('Datos insertados correctamente');
      res.status(200).send('Datos insertados correctamente');
    }
  });
});

// Iniciar servidor en el puerto 3000

conexion.end();

module.exports = conexion, app;