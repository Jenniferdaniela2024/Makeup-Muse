const express = require('express');
const router = express.Router();
const Pro = require('../models/pro.js');

// Ruta GET para obtener todos los productos
router.get('/pro', async (req, res) => {
    try {
        const pros = await Pro.find(); // Obtener todos los productos
        res.json(pros); // Enviar los productos como respuesta
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta POST para guardar un nuevo producto
router.post('/pro', async (req, res) => {
    try {
        const pros = new Pro(req.body); // Crear una nueva instancia de Pro con los datos del cuerpo de la solicitud
        await pros.save(); // Guardar el producto en la base de datos
        console.log(pros); // Imprimir el producto en la consola
        res.json({
            status: 'Pro Saved', // Responder con el mensaje de éxito
            product: pros // También podemos enviar el producto guardado en la respuesta
        });
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejar errores de la solicitud
    }
});

// Ruta PUT para actualizar un producto
router.put('/pro/:id', async (req, res) => {
    try {
        const product = await Pro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product); // Enviar el producto actualizado como respuesta
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta DELETE para eliminar un producto
router.delete('/pro/:id', async (req, res) => {
    try {
        const product = await Pro.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
