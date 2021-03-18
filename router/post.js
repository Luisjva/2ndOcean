var express = require('express');
var router = express.Router();

router.get('/We-cant-live-forever', function (req, res) {
  res.render('post1', { titulo: "We can't live forever", css: "post1"});
});

router.get('/bajo-la-ducha', function (req, res) {
  res.render('post2', { titulo: "Bajo la ducha", css: "post2"});
});

router.get('/amor-fugaz', function (req, res) {
  res.render('post3', { titulo: "Amor fugaz", css: "post3"});
});

router.get('/sacame-de-la-incertidumbre', function (req, res) {
  res.render('post4', { titulo: "Sácame de la incertidumbre", css: "post4"});
});

router.get('/corto-pero-eterno', function (req, res) {
  res.render('post5', { titulo: "Corto pero eterno", css: "post5"});
});

router.get('/no-te-enamores-de-las-personas', function (req, res) {
  res.render('post6', { titulo: "No te enamores de las personas.", css: "post6"});
});

router.get('/Si-tu-boca-fuera-fuego', function (req, res) {
  res.render('post7', { titulo: "Si tu boca fuera fuego", css: "post7"});
});

module.exports = router;