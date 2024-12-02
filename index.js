const express = require('express');  // Corrige 'requerid' a 'require'
const app = express();

// Usar express.json() para manejar el cuerpo de la solicitud en formato JSON
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Base de datos local
const users = [
    {
        id: 1,
        nombre: 'jennifer23',
        contraseña: '123'
    },
    {
        id: 2,
        nombre: 'Maikol',
        contraseña: '2024'}
    // },
    // {
    //     id: 3,
    //     nombre: 'andrew10',
    //     contraseña: '2025'
    // }
];
// Base de datos de productos (con imágenes)
const products = [
    
        { id: 1, name: " Kit de brochas para Rostro", price: "30.500", imgUrl: "public/brochas.png", description: "✔Kit de brochas x7", Marca: "Rubi Rouse", Tono: "Rosado" },
        { "id": 2, "name": "Base", "price": "35.000", "imgUrl": "public/base.jpeg", "description": "Base liquida mate", "Marca": "Vogue", "Tono": "02" },
        { "id": 3, "name": "Iluminador", "price": "12.000", "imgUrl": "public/iluimnador.jpeg", "description": "Iluminador suelto para rostro", "Marca": "Ani-k", "Tono": "03" },
        { "id": 4, "name": "Polvo Traslucido", "price": "12.000", "imgUrl": "public/polvo.jpeg", "description": "Polvo suelto traslucido", "Marca": "Sammy", "Tono": "01" },
        { "id": 5, "name": "Labial Mate", "price": "49.000", "imgUrl": "public/labial.png", "description": "Labial líquido SuperStay Vinyl Ink", "Marca": "Maybeline", "Tono": "16" },
        { "id": 6, "name": "Labial líquido", "price": "30.000", "imgUrl": "public/kylie.jpeg", "description": "Labial líquido presentación 3,0 ml", "Marca": "Kylie Cometics", "Tono": "Café (nude) Ginger" },
        { "id": 7, "name": "Contorno", "price": "25.000", "imgUrl": "public/contorno.jpeg", "description": "Contorno ligero en crema", "Marca": "Trendy", "Tono": "03" },
        { "id": 8, "name": "Agua Micelar", "price": "10.000", "imgUrl": "public/aguamicelar.jpg", "description": "Extracto de rosas y manzanilla en alta concentración", "Marca": "Trendy", "Tono": "Rosa" }   
];

app.get('/products' , (req, res) => {
    res.send('Node js api');
});
app.get('/api/products', (req, res) => {
    res.send(products);
});
app.get('/api/products/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Producto no encontrado');
    res.send(user);
});

app.post('/api/products', (req, res) => {
    const product = {
        id: products.length + 1,
        nombre: req.body.nombre,
        contraseña: req.body.contraseña
    };
    products.push(product); 
    res.send(product); 
});

app.delete('/api/products/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Producto no encontrado');
    
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(product); 
});



// Request de la API URL y direcciones de usuarios
app.get('/user', (req, res) => {
    res.send('Node js api');
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');
    res.send(user);
});

app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        nombre: req.body.nombre,
        contraseña: req.body.contraseña
    };
    users.push(user); // Añadir el usuario correctamente
    res.send(user); // Enviar solo el usuario que se creó
});

app.delete('/api/users/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');
    
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(user); // Enviar el usuario eliminado
});

const port = process.env.PORT || 80;  // Usa 'PORT' en mayúsculas
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));
