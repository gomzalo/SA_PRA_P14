require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

const users = [
    {
        username: 'Tepokun',
        password: 'aymimadre',
        tipo: 'Restaurante'
    },
    {
        username: 'Ebenja',
        password: 'hola123',
        tipo: 'Cliente'
    },
    {
        username: 'Rod',
        password: 'clavecinha',
        tipo: 'Repartidor'
    }
]

app.get('/getusers', authenticateToken, (req, res) => {
    res.json(users.filter(post => post.username === req.user.name));
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

console.log('Login server running on 4004');

app.listen(4004);