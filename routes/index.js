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

module.exports = router;
