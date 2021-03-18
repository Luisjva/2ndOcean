var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('inicio', { titulo: 'Inicio', css: 'Inicio'});
});

module.exports = router;