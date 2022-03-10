const express = require('express')
const router = express.Router()


const peliculaController = require('../controllers/peliculaController')

//mostrando las peliculas
router.get('/',  peliculaController.mostrar)
//creando
router.post('/crear', peliculaController.crear)
//editando
router.post('/editar', peliculaController.editar)
//borrando
router.get('/borrar/:id', peliculaController.borrar)

module.exports = router