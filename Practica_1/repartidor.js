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

app.post('/deliver_order', authenticateToken, (req, res) => {
    // console.log("RESTAURANTE: ", req);

    let id_order = req.body.id;
    let user = req.body.user;
    console.log(req.body)
    // orders.push(order);
    orders.map((item)=>{
        if (item.id === id_order && item.user === user )
        {
            item.status = 2
        }
    });
    let order_now = orders.filter(item => item.id === id_order && item.user === user )[0];
    if (typeof order_now !== 'undefined')
    {
        res.json({ message: `El repartidor ha entregado la  Orden: ${order_now.id} a Nombre de ${order_now.user}.` });
    }
    res.json({ message: "Orden No encontrada" });
});


app.post('/send_status_to_client', authenticateToken, (req, res) => {
    // console.log("RESTAURANTE: ", req);
    console.log("status en repartidor")
    console.log(req.body)
    const user_actual = req.body.username;
    const id_order = req.body.id_order;
    console.log(orders)
    let order_actual;
    // order_actual = orders.forEach((order)=>{
    //     if (order.user === user_actual && order.id === id_order ){
    //         console.log(order)
    //         return order;
    //     }
    // });
    order_actual = orders.filter(post => post.user === user_actual && post.id === id_order)[0];
    
    let estado =""
    if (typeof order_actual !== 'undefined')
    {
        console.log(order_actual)
        switch(order_actual.status)
        {
            case 0:
                estado = "Recibido por restaurante"
                break;
            case 1:
                estado = "Recibido por repartidor"
                break;
            case 2:
                estado = "Entregado"
                break;
            default:
                estado = ""
                break;
        }
        estado = `No Orden: ${order_actual.id} ` + estado
    }else{
        res.json({ message: "Orden No encontrada" });
    }
    
    res.json({ message: estado });
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