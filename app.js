var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
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
 
app.post('/registro', (req, res) => {
  const { n_paca, variedad, clase, peso_humedo, peso_despalillo, gavillas_funda, gavilla_paca, prom_gavillas, n_tickets, fecha_elaboracion } = req.body;
  const query = `INSERT INTO ticket_gavilla (n_paca, variedad, clase, peso_humedo, peso_despalillo, gavillas_funda, gavilla_paca, prom_gavillas, n_tickets, fecha_elaboracion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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
