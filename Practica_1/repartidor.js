require('dotenv').config();

const express = require('express');
const request = require('request');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

const orders = [];

/*
    Estados pedidos:
    0: Recibido por restaurante
    1: Recibido por repartidor
    2: Entregado
*/

app.post('/add_order_delivery', authenticateToken, (req, res) => {
    // console.log("RESTAURANTE: ", req);
    const order = req.body.order;
    orders.push(order);
    res.json({ message: "El repartidor recibio el pedido." });
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
    res.json({ message: "Repartidor server running on 7007." });
});

console.log('Repartidor server running on http://0.0.0.0:7007');

app.listen(7007);