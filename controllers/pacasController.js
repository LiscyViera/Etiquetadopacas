const express = require('express');
const router = express.Router();
const conexion = require('./app2');

router.post('/registro', (req, res) => {
    const n_paca = req.body.n_paca;
    const variedad = req.body.variedad;
    const clase = req.body.clase;
    const peso_humedo = req.body.peso_humedo;
    const peso_despalillo = req.body.peso_despalillo;
    const gavillas_funda = req.body.gavillas_funda;
    const gavilla_paca = req.body.gavilla_paca;
    const prom_gavillas = req.body.prom_gavillas;
    const n_tickets =req.body.n_tickets;
    const fecha_elaboracion = req.body.fecha_elaboracion

    const query = `INSERT INTO ticket_gavilla (n_paca, variedad, clase, peso_humedo, peso_despalillo, gavillas_funda, gavilla_paca, prom_gavillas, n_tickets, fecha_elaboracion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    conexion.query(query, [n_paca, variedad, clase, peso_humedo, peso_despalillo, gavillas_funda, gavilla_paca, prom_gavillas, n_tickets, fecha_elaboracion], (error, result) => {
      if (error) {
        console.log('Error al insertar datos:', error);
        res.status(500).send('Error al insertar datos');
      } else {
        console.log('Datos insertados correctamente');
        res.status(200).send('Datos insertados correctamente');
      }
    });    
    res.render('register', { title: 'NUEVA ETIQUETA DE FUNDAS' });
});

module.exports = router;
