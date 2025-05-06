const Joi = require('joi')

const productoSchema = Joi.object({
    nombre: Joi.string().min(2).max(30).required(),
    precio: Joi.number().positive().precision(2).required()
})

module.exports = productoSchema