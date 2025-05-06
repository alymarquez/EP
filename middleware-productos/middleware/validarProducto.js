const productoSchema = require('./validacion/schemaProducto')

const validarProducto = (req, res, next) => {
    const { error } = productoSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "Datos inválidos",
            error: error.details.map(det => det.message)
        })
    }
    next()
}

module.exports = validarProducto