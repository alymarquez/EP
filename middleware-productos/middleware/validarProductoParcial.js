const productoParcialSchema = require('./validacion/schemaProductoParcial')

const validarProductoParcial = (req, res, next) => {
    const { error } = productoParcialSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "Datos inválidos",
            error: error.details.map(det => det.message)
        })
    }
    next()
}

module.exports = validarProductoParcial