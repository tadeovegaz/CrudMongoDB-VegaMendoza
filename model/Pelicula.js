const mongoose = require('mongoose')
const Schema = mongoose.Schema

const peliculaSchema = new Schema({
    nombre: String,
    year: Date.UTC(),
    genero: String,
    director: String
},{versionKey:false})

module.exports = mongoose.model('coleccion_peliculas', peliculaSchema)

