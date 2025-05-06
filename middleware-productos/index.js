const express = require('express')
const router = require('./routes/productosRoutes')
const db = require('./db/models')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/productos', router)

app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`)
    db.sequelize.sync()
})