require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

const orders = [];

/*
    Estados pedidos:
    0: Agregado
    1: Recibido por restaurante
    2: Enviado a repartidor
    3: Recibido por repartidor
    4: Entregado
*/

app.post('/add_order', authenticateToken, (req, res) => {
    // console.log("RESTAURANTE: ", req);
    const user_actual = req.body.username;
    let id_order = 0;
    const order = {
        id: id_order,
        user: user_actual,
        status: 0
    }
    id_order++;
    orders.push(order);
    res.json({ message: "Se agrego la orden correctamente." });
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/', (req, res) => {
    res.json({ message: "Restaurante server running on 6006." });
});

console.log('Restaurante server running on http://0.0.0.0:6006');

app.listen(6006);