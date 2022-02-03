require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

const orders = [];

app.get('/get_pedido_res', authenticateToken, (req, res) => {
    const user_actual = req.user;
    const rol_usuario = user_actual.rol;
    if(rol_usuario == 2){

    }
    res.json(users.filter(post => post.username === req.user.name && post.password === req.user.pass));
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