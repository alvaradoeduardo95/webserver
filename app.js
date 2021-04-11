const express = require('express')
const app = express()

var hbs = require('hbs');
require('dotenv').config();

const port = process.env.Port;

//TODO: require(hbs)
app.set('view engine', 'hbs');

//SERVICIO ESTATICO DE UN SERVIDOR 
app.use( express.static('public') );
hbs.registerPartials(__dirname + '/views/partials');


app.get('/holamundo', function (req, res) {
    res.send('Este es el Hola Mundo');
})
 


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Eduardo Alvarado',
        title: 'Curso de node JS'
    });
})

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Eduardo Alvarado',
        title: 'Curso de node JS'
    });
})


app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Eduardo Alvarado',
        title: 'Curso de node JS'
    });
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  