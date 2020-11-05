const express = require('express')

const app = express ();


// links a las páginas
app.get('/', function (req, res){
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/ofertas', function (req, res){
    res.sendFile(__dirname + '/views' + req.url + '.html')
})

app.get('/ayuda', function (req, res){
    res.sendFile(__dirname + '/views' + req.url + '.html')
})

app.get('/tiendas-oficiales', function (req, res){
    res.sendFile(__dirname + '/views' + req.url + '.html')
})

app.get('/vender', function (req, res){
    res.sendFile(__dirname + '/views' + req.url + '.html')
})

// links a las imagenes
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/' + req.url)
})

//listen
app.listen(3000, function (){
    console.log('Para ver el sitio ingresa a http://localhost:3000/')
})