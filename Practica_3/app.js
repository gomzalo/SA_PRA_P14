const express = require('express');
const app = express();
const router = express.Router();
const sum = require('./calc/sum.js');


const path = __dirname + '/views/';
const port = 5050;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req,res){
    res.sendFile(path + 'index.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
    console.log('App listening on http://0.0.0.0:5050')
})