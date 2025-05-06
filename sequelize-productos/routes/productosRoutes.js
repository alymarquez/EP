const { Router } = require('express')
const productosControllers = require('../controllers/productosController')
const router = Router()

router.get('/', productosControllers.mostrarProductos)
router.get('/:id', productosControllers.mostrarProducto)
router.post('/', productosControllers.agregarProducto)
router.patch('/:id', productosControllers.modificarProducto) // modificar producto
router.put('/:id', productosControllers.actualizarProducto)
router.delete('/:id', productosControllers.eliminarProducto)


module.exports = router