const  Pelicula = require('../model/Pelicula')
const {json} = require("express");

console.log("dasd")
//mostrar
module.exports.mostrar = (req, res)=>{
    Pelicula.find({}, (error, peliculas)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando las peliculas'
            })
        }
        return res.render('index', {peliculas: peliculas})
    })
}

module.exports.crear = (req, res) =>{
    const pelicula = new Pelicula({
        nombre: req.body.nombre,
        year: req.body.year,
        genero: req.body.genero,
        director: req.body.director
    })
    pelicula.save(function (error, pelicula){
        if (error){
            return res.status(500).json({
                message:'Error al crear peliculas'
            })
        }
        res.redirect('/')
    })
}

module.exports.editar = (req, res) =>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const year = req.body.year_editar
    const genero = req.body.genero_editar
    const director = req.body.director_editar
    Pelicula.findByIdAndUpdate(id, {nombre, year, genero, director}, (error, pelicula)=>{
        if (error){
            return res.status(500).json({
                message:'Error editando peliculas'
            })
        }
        res.redirect('/')
    })
}

module.exports.borrar = (req, res) =>{
    const id = req.params.id
    Pelicula.findByIdAndRemove(id,(error, pelicula)=>{
        if(error){
            return res.status(500).json({
                message:'Error al borrar el pelicula'
            })
        }
        res.redirect('/')
    })
}