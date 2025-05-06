const { producto } = require('../db/models')

const mostrarProductos = async (req,res)=>{
    const productos = await producto.findAll({
        attributes: ['nombre','precio']
    })
    res.status(200).json(productos)
}

const mostrarProducto = async (req,res)=>{
    const id = req.params.id
    const product = await producto.findByPk(id)
    if(product){
        res.status(200).json(product)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const agregarProducto = async (req,res)=>{
    const {nombre, precio} = req.body
    const product = await producto.create({ nombre, precio})
    res.status(201).json(product)
}

const modificarProducto = async (req,res)=>{
    const id = req.params.id
    const product = await producto.findByPk(id)
    if(product){
        const { nombre, precio } = req.body
        if(nombre) product.nombre = nombre
        if(precio) product.precio = precio
        await product.save()
        res.status(200).json(product)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const actualizarProducto = async (req,res)=>{
    const id = req.params.id
    const product = await producto.findByPk(id)
    if(product){
        const { nombre, precio } = req.body
        product.nombre = nombre
        product.precio = precio
        await product.save()
        res.status(200).json(product)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const eliminarProducto = async (req,res)=>{
    const id = req.params.id
    const product = await producto.findByPk(id)
    if(product){
        await product.destroy()
        res.status(200).json({message: "Producto eliminado"})
    }else{
        res.status(404).json({message: "Producto no encontrado"})
    }
}

module.exports = {
    mostrarProductos,
    mostrarProducto,
    agregarProducto,
    modificarProducto,
    actualizarProducto,
    eliminarProducto
}