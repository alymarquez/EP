const { Router } = require('express')
const productosControllers = require('../controllers/productosController')
const router = Router()
const validarProducto = require('../middleware/validarProducto')
const validarProductoParcial = require('../middleware/validarProductoParcial')

router.get('/', productosControllers.mostrarProductos)
router.get('/:id', productosControllers.mostrarProducto)
router.post('/', validarProducto, productosControllers.agregarProducto)
router.patch('/:id', validarProductoParcial, productosControllers.modificarProducto)
router.put('/:id', validarProducto, productosControllers.actualizarProducto)
router.delete('/:id', productosControllers.eliminarProducto)

module.exports = router