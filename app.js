const express = require('express')
const app = express()
const port = 3000

const rutas = require('./router/rutas.js');
const post = require('./router/post.js');


app.set('view engine', 'pug');
app.set('views', __dirname + '/views/pages');
app.set('port', process.env.PORT || 3000);


app.use('/public', express.static( __dirname + '/public'));

app.use('/', rutas)

app.use('/post', post)


app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
})

app.use(function(req, res, next) {
  res.status(404).render('404', { titulo: '404'});
});

