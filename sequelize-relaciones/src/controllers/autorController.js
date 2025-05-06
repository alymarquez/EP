const { Autor } = require('../db/models')

const obtenerLibros = async (req,res) => {
    const { id } = req.params
    const autor = await Autor.findByPk(id)
    if(!autor){
        return res.status(404).json({error: 'Autor no encontrado'})
    }
    const libros = await autor.getLibros({
        order: [['titulo', 'ASC']] //te retorna por orden de titulo ascendente
    })

    res.status(200).json(libros)
}

module.exports = {
    obtenerLibros
}