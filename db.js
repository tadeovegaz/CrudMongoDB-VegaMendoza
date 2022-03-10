const mongoose = require('mongoose')
const url = 'mongodb://localhost/peliculas_db'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.log.bind(console, 'Error al conectar MongoDB'))
db.on('open', function callback(){
    console.log('Conectado a mongoDB!')
})

module.exports = db