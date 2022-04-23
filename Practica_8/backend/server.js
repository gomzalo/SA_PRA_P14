
var express = require('express');
var app = express();
const cors = require('cors');

var PORT = 3000;
var consumido = 0;

app.use(cors({
    origin: '*'
}));

app.get('/', function(req, res) {
    res.status(200).send({
        contador: consumido
    });
});

app.post('/', function(req, res) {
    consumido++;
    res.status(200).send({
        contador: consumido
    });
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});