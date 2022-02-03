require('dotenv').config();

const express = require('express');
const request = require('request');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json())

/* Roles:
    Cliente: 1
    Restaurante: 2
    Repartidor: 3
*/

app.get('/new_order', authenticateToken, (req, res) => {
    const user_actual = req.user;
    const rol_usuario = user_actual.rol;
    // console.log("CLIENTE: ", user_actual);
    if(rol_usuario == 1){
        // console.log("CLIENTE: ", req.headers['authorization']);
        request.post(
            {
            "headers" : { 
                "content-type": "application/json",
                "Authorization": req.headers['authorization']
            },
            "url" : "http://0.0.0.0:6006/add_order",
            "body": JSON.stringify({
                "username": user_actual.name
            })
            }, (err, response, body) => {
                if(err) {
                    console.log(err);
                    // return response.sendStatus(401);
                }else{
                    res.json(JSON.parse(body));
                }
            })
    }else{
        res.json({ message: "Solamente los clientes pueden solicitar nuevos pedidos." });
    }
});

app.post('/get_status_to_restaurant', authenticateToken, (req, res) => {
    console.log(req.body)
    const user_actual = req.user;
    const rol_usuario = user_actual.rol;
    const id_order = req.body.id_order;
    // console.log("CLIENTE: ", user_actual);
    if(rol_usuario == 1){
        // console.log("CLIENTE: ", req.headers['authorization']);
        request.post(
            {
            "headers" : { 
                "content-type": "application/json",
                "Authorization": req.headers['authorization']
            },
            "url" : "http://0.0.0.0:6006/send_status_to_client",
            "body": JSON.stringify({
                "username": user_actual.name,
                "id_order": id_order
            })
            }, (err, response, body) => {
                if(err) {
                    console.log(err);
                    return response.sendStatus(401);
                }else{
                    res.json(JSON.parse(body));
                }
            })
    }else{
        res.json({ message: "Solamente los clientes pueden solicitar nuevos pedidos." });
    }
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
    res.json({ message: "Cliente server running on 5005." });
});

console.log('Cliente server running on http://0.0.0.0:5005');

app.listen(5005);