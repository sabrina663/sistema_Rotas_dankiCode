const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/bonus.html',function(req,res){
    res.sendFile(path.join(__dirname + '/bonus.html'));
});

app.use('/',router);

app.listen(8080,() => {
    console.log('Servidor rodando...');
})