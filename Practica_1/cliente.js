require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

/* Roles:
    Cliente: 1
    Restaurante: 2
    Repartidor: 3
*/

const users = [];

app.get('/getuser', authenticateToken, (req, res) => {
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

console.log('Cliente server running on 5005');

app.listen(5005);