import joi from 'joi'

export const schemasProduct = joi.object({
    nombre: joi.string().min(5).max(255).required(),
    descripcion: joi.string().min(5).max(255).required(),
    cantidad: joi.number().integer().positive().min(100).max(9999).required(),
    precio: joi.number().precision().positive().min.apply(100).max(9999).required()

})