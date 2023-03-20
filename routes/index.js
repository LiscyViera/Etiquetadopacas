var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ETIQUETA FUNDAS DE CAPA' });
});

router.get('/resumen', function(req, res, next) {
  res.render('resumen', { title: 'RESUMEN ETIQUETA FUNDAS DE CAPA' });
});

router.get('/registro', function(req, res, next) {
  res.render('register', { title: 'REGISTRAR NUEVA ETIQUETA DE FUNDAS' });
});

const bodyParser = require('body-parser');

router.post('/registro', bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  const datosFormulario = req.body;
  req.render('registrar', { title: 'NUEVA ETIQUETA DE FUNDAS REGISTRADA' });
  // Procesa los datos del formulario y envía la respuesta correspondiente
});

module.exports = router;
