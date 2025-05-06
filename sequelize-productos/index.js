const express = require('express')
const router = require('./routes/productosRoutes')
const db = require('./db/models')

const app = express()
const PORT = 3000

app.use(express.json()) // para que node.js pueda leer el json, traducirlo en un objeto

app.use('/productos', router)

app.listen(PORT, ()=>{
    console.log('Aplicación corriendo en el puerto ' + PORT)
    db.sequelize.sync() //sincronizo la base de datos
})

