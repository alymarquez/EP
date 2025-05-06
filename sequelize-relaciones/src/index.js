const express = require('express')
const app = express()
const db = require('./db/models')
const { required } = require('joi')
const autorRouter = require('./routes/autorRouter')

const PORT = 3000

const test1 = async () => {
    await db.sequelize.sync({force: true})
    const autor = await db.Autor.create({
        nombre: 'Isabel Allade',
        fechaNacimiento: new Date('1942-08-02')
    })
    const autor2 = await db.Autor.create({
        nombre: 'Juan Gomez',
        fechaNacimiento: new Date('1942-06-02')
    })
    const libro = await db.Libro.create({
        titulo: 'La casa de los espiritus',
        genero: 'Fantasia',
        AutorId: autor.id
    })
    const libro2 = await db.Libro.create({
        titulo: 'Libro2',
        genero: 'Autobiografia',
        AutorId: autor.id
    })

    const resultado = await db.Autor.findOne({
        where: { nombre: 'Isabel Allade' }, // filtramos por el nombre d la autora.
        include: {
            model: db.Libro,// esto es un JOIN en sql, nos traemos los libros que tengan como clave foranea a esa autora.
            attributes: ['titulo', 'genero'],
            required: true
        }, 
        attributes: ['nombre', 'fechaNacimiento']
    })

    console.log(JSON.stringify(resultado,null,2))
}

app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en el puerto ${PORT}`)
    test1()
})