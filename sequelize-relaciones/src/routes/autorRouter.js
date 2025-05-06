const { Router } = require('express')
const autorController = require('../controllers/autorController')
const router = Router()

router.get('/:id/libros', autorController.obtenerLibros)