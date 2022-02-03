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

const users = [
    {
        username: 'Ebenja',
        password: 'hola123',
        rol: 1
    },
    {
        username: 'Tepokun',
        password: 'aymimadre',
        rol: 2
    },
    {
        username: 'Rod',
        password: 'clavecinha',
        rol: 3
    }
];

app.get('/getuser', authenticateToken, (req, res) => {
    res.json(users.filter(post => post.username === req.user.name && post.password === req.user.pass));
});

app.post('/login', (req, res) => {
    // Autenticacion
    const username = req.body.username;
    const password = req.body.password;
    
    const user_temp = users.filter(post => post.username === username)[0];
    // console.log(user_temp);
    if(user_temp != null)
    {
        if(user_temp.password != password) res.json({ message: "Contraseña invalida" });
        const user = { 
            name: username,
            pass: password,
            rol: user_temp.rol
        };
        const acccessToken = generateAccessToken(user);
        console.log("LOGIN: ", user.rol);
        res.json({ acccessToken: acccessToken });
    }else{
        res.json({ message: "Usuario no encontrado" });
    }
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

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
    res.json({ message: "Login server running on 4004." });
});

console.log('Login server running on http://0.0.0.0:4004');

app.listen(4004);