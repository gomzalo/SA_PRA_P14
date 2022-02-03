require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

const orders = [
    {
        no: 1,
        username: 'Ebenja',
        status: 'cocinando',
        order:
        [
            {
                order: 'jugo cereza'
            },
            {
                order: 'Ramen'
            }
        ]
    },
    {
        no: 2,
        username: 'Ebenja',
        status: 'cocinando',
        order:
        [
            {
                order: 'Coca Cola'
            },
            {
                order: 'soup'
            }
        ]
    },
    {
        no: 3,
        username: 'Ebenja',
        status: 'cocinando',
        order:
        [
            {
                order: 'SevenUp'
            },
            {
                order: 'soup'
            }
        ]
    },
];

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

app.listen(7007);