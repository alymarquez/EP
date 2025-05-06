const Joi = require('joi')

const productoParcialSchema = Joi.object({
    nombre: Joi.string().min(2).max(30),
    precio: Joi.number().positive().precision(2)
}).or('nombre', 'precio')

module.exports = productoParcialSchema